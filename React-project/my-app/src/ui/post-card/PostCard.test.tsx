import { render, screen } from "@testing-library/react";
import { PostCard } from "./PostCard";

test("Title rendering", () => {
  render(
    <PostCard id={1} title="Hello" date="20.03.2012" text="text"></PostCard>
  );
  //   expect(screen.getByText("Hello")).toBeTruthy();
  const heading = screen.getByRole("heading", { level: 3 });
  expect(heading).toBeTruthy();
  expect(heading.textContent).toBe("Hello");
});
