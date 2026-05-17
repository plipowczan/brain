export interface Note {
  path: string;
  title: string;
  type: string;
  tags: string[];
  summary: string;
  date: string;
  content: string;
}

export interface SearchMatch {
  path: string;
  title: string;
  type: string;
  tags: string[];
  summary: string;
  excerpt?: string;
  content?: string;
  score: number;
  links_to: string[];
  linked_from: string[];
}

export type SearchMode = "summary" | "full";

export interface SearchArgs {
  query: string;
  mode?: SearchMode;
  limit?: number;
  filter_topic?: string;
  filter_tag?: string;
  filter_type?: string;
}
