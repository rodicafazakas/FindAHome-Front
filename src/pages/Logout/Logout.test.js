import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Logout from "./Logout";
import configureStore from "../../redux/store/store";
import { userExample } from "../../factories/userFactory";

describe("Given a Logout page", () => {
  let store = configureStore();
  describe("When the Salir button is clicked", () => {
    test("Then it goes to the loginpage", () => {
      const userFake = userExample;
      const user = {
        isAuthenticated: true,
        user: userFake,
      };
      render(
        <Provider store={store}>
          <Router>
            <Logout user={user} />
          </Router>
        </Provider>
      );

      const goToLoginLink = screen.getAllByRole("link", {
        name: "Salir",
      })[0];
      userEvent.click(goToLoginLink);

      expect(goToLoginLink).toHaveAttribute("href", "/login");
    });
  });
});
