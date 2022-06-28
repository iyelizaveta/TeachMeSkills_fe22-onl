import { Post } from "../../types/post";

export type SearchSuccess = {
  count: number;
  next: string;
  previous: null;
  results: Post[];
};

export type SearchPayload = {
  text: string;
};
