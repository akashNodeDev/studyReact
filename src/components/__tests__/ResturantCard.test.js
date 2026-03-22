import { render, screen } from "@testing-library/react";
import ResturantCard from "../ResturantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should load resturant card componenet with props Data", () => {
  render(<ResturantCard resData={MOCK_DATA} />);
  const resName = screen.getByText("Pizza Hut");
  // Assertion
  expect(resName).toBeInTheDocument();
});
