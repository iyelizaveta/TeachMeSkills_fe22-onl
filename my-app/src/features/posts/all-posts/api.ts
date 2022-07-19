import { baseUrl } from "../../../api/config";
import { AllPosts } from "./types";

export namespace PostsApi {
  export async function getPosts(): Promise<AllPosts> {
    try {
      const result = await fetch(`${baseUrl}blog/posts/?limit=11`);
      if (!result.ok) {
        const errorText = await result.text();
        throw new Error(errorText);
      }
      return result.json();
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
