import { baseUrl } from "../../api/config";
import { SearchSuccess } from "./types";

export namespace SearchApi {
  export async function search(params: {
    text: string;
  }): Promise<SearchSuccess> {
    try {
      const result = await fetch(`${baseUrl}blog/posts/?search=${params.text}`);
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
