import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchArea from "./Searcharea";

test("Input feild working", () => {
  render(<SearchArea />);
  const inputEle = screen.getByPlaceholderText("Artist Name");
  const searchIcon = screen.getByTestId("searchIcon");
  expect(inputEle).toHaveValue("");
  userEvent.type(inputEle, "String");
  expect(inputEle).toHaveValue("String");
});
