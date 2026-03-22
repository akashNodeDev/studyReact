import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Header should render header componenet with the login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  //const loginButton = screen.getByRole("button");
  // If we have multiple buttons and want the button with specific name then we can write the code as below
  const loginButton = screen.getByRole("button", { name: "Login" });

  //const loginButton = screen.getByText("Login");
  expect(loginButton).toBeInTheDocument();
});

it("it should render the header component with cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  //const cartButton = screen.getByText("Cart (0 items)");

  // using regex
  const cartButton = screen.getByText(/Cart/);

  expect(cartButton).toBeInTheDocument();
});

it("should change the login button to the logout button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});
