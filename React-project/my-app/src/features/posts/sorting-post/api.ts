import { baseUrl } from "../../../api/config";
import { AllPosts } from "../all-posts/types";

export namespace SortingPostsApi {
  export async function getOrderingPosts(params: {
    text: string;
  }): Promise<AllPosts> {
    try {
      const result = await fetch(
        `${baseUrl}blog/posts/?limit=11&ordering=${params.text}`
      );
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
