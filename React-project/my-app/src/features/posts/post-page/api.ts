import { baseUrl } from "../../../api/config";
import { Post } from "./types";

export namespace PostApi {
  export async function getPost(): Promise<Post> {
    try {
      const result = await fetch(`${baseUrl}blog/posts/78`);
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
