import { screen } from "@testing-library/react";
import { renderWithRedux } from "../../../test-config/render-with-redux";
import { PostsLikeDislike } from "./posts-like-dislike";

test("Count rendering", () => {
  renderWithRedux(<PostsLikeDislike id={1}></PostsLikeDislike>, {
    initialState: { likeDislike: { "1": { count: 16, state: "like" } } },
  });
  expect(screen.getByText("16")).toBeTruthy();
});
