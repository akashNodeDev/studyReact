import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// describe is just used to group the test cases
// you can do nesting of the describe
//NOTE: instead of the test() function you can use the it() function. Both are same thing. it is an
// alias for test

describe("Contact Us Page test cases", () => {
  it("should load the contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("should load button inside the contact us component", () => {
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
    // to understand the details of the output just hover over the toBe
    // expect(inputBoxes.length).toBeTruthy()
  });
});
