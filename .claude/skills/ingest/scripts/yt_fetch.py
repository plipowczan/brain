"""YouTube source fetcher for /ingest skill.

Fetches metadata + transcript for a YouTube URL and writes a synthesized
source markdown file under content/_raw/processed/ for downstream ingest.
"""
from __future__ import annotations

import re
from urllib.parse import urlparse, parse_qs


class YTUrlError(ValueError):
    """Raised when input does not look like a recognized YouTube URL."""


_HOSTS = {"youtube.com", "www.youtube.com", "m.youtube.com", "youtu.be"}
_VIDEO_ID_RE = re.compile(r"^[A-Za-z0-9_-]{11}$")


def normalize_url(url: str) -> str:
    """Return canonical 11-char video_id for a YouTube URL.

    Raises YTUrlError on anything that doesn't parse to a valid YT video id.
    """
    try:
        parsed = urlparse(url)
    except ValueError as e:
        raise YTUrlError(str(e)) from e

    if parsed.scheme not in {"http", "https"} or parsed.netloc not in _HOSTS:
        raise YTUrlError(f"Not a YouTube URL: {url!r}")

    if parsed.netloc == "youtu.be":
        candidate = parsed.path.lstrip("/")
    else:
        candidate = parse_qs(parsed.query).get("v", [""])[0]

    if not _VIDEO_ID_RE.match(candidate):
        raise YTUrlError(f"Could not extract video_id from {url!r}")
    return candidate
