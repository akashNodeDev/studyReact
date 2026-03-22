import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search the res list for Little input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    ),
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(8);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");
  // //console.log("searchInput==", searchInput);

  fireEvent.change(searchInput, { target: { value: "Little" } });

  fireEvent.click(searchBtn);

  // expect(searchBtn).toBeInTheDocument();

  // screen should load 1 element match with Pizza

  const cardAfterSearch = screen.getAllByTestId("resCard");

  // Assertion

  expect(cardAfterSearch.length).toBe(1);
});

it("Should filter top rated resturants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    ),
  );

  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(8);

  const filterBtn = screen.getByRole("button", {
    name: "Top Rated Resturants",
  });
  fireEvent.click(filterBtn);
  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(4);
});
