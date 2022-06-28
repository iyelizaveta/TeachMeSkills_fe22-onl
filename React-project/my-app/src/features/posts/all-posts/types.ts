import { Post } from "../../../types/post";

export type AllPosts = {
  count: number;
  next: string;
  previous: null;
  results: Post[];
};
