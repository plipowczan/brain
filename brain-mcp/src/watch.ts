import chokidar from "chokidar";

const EXCLUDED_PARTS = ["_raw", "_indexes", "_outputs", "templates", "ATTACHMENTS", ".obsidian", ".git"];
const DEBOUNCE_MS = 500;

export function startWatcher(brainPath: string, onRebuild: () => Promise<void>): () => Promise<void> {
  const watcher = chokidar.watch(brainPath, {
    ignored: (p: string) => {
      if (p === brainPath) return false;
      const norm = p.replace(/\\/g, "/");
      if (EXCLUDED_PARTS.some((part) => norm.includes(`/${part}/`) || norm.endsWith(`/${part}`))) return true;
      const last = norm.split("/").pop() ?? "";
      if (last.startsWith(".")) return true;
      return false;
    },
    ignoreInitial: true,
    persistent: true,
    awaitWriteFinish: { stabilityThreshold: 200, pollInterval: 50 },
  });

  let timer: NodeJS.Timeout | null = null;
  let running = false;
  let pending = false;

  const trigger = (event: string, path: string) => {
    if (!path.toLowerCase().endsWith(".md")) return;
    pending = true;
    if (timer) return;
    timer = setTimeout(async () => {
      timer = null;
      while (pending) {
        pending = false;
        if (running) {
          pending = true;
          break;
        }
        running = true;
        try {
          const t0 = Date.now();
          await onRebuild();
          console.error(`[brain-mcp] re-indexed in ${Date.now() - t0}ms (trigger: ${event})`);
        } catch (e) {
          console.error("[brain-mcp] rebuild failed:", (e as Error).message);
        }
        running = false;
      }
    }, DEBOUNCE_MS);
  };

  watcher.on("add", (p) => trigger("add", p));
  watcher.on("change", (p) => trigger("change", p));
  watcher.on("unlink", (p) => trigger("unlink", p));
  watcher.on("error", (e) => console.error("[brain-mcp] watcher error:", e));

  return async () => {
    await watcher.close();
  };
}
