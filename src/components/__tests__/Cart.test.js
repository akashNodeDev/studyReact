import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import ResturantMenu from "../ResturantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA_NAME from "../../utils/resMenuMockData";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME.resMenuMockData),
  }),
);

it("Should load the resturant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <ResturantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>,
    ),
  );

  const accordianHeader = screen.getByText("Ghewar(6)");
  fireEvent.click(accordianHeader);
  expect(screen.getAllByTestId("foodItems").length).toBe(6);

  expect(screen.getByText("Cart (0 items)")).toBeInTheDocument;

  const addBtns = screen.getAllByRole("button", { name: "Add +" });

  //console.log(addBtns.length);

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart (1 items)")).toBeInTheDocument;

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart (2 items)")).toBeInTheDocument;

  expect(screen.getAllByTestId("foodItems").length).toBe(8);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(6);
});
