import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("debug jsx", () => {
  const element = <div>Hello</div>;
  expect(element).toBeDefined();
});

test("should load the contact us component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  // Assertion
  expect(heading).toBeInTheDocument();
});

test("should load button inside the contact us component", () => {
  render(<Contact />);
  const button = screen.getByRole("button");
  // Assertion
  expect(button).toBeInTheDocument();
});

test("should load input name inside the contact us component", () => {
  render(<Contact />);
  const getPlaceHolderText = screen.getByPlaceholderText("name");
  // Assertion
  expect(getPlaceHolderText).toBeInTheDocument();
});

test("should load 2 input boxes inside the contact us component", () => {
  render(<Contact />);
  // Querying
  const inputBoxes = screen.getAllByRole("textbox");
  // console.log("inputBoxes======",inputBoxes);
  // Assertion
  // the below code can be also written as
  //expect(inputBoxes.length).not.toBe(3);
  expect(inputBoxes.length).toBe(2);
});
