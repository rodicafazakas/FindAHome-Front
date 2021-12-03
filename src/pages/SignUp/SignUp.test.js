import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "../../redux/store/store";

import SignUp from "./SignUp";

describe("Given a SignUP component", () => {
  let store = configureStore();
  describe("When it is rendered", () => {
    test("Then it should show a crear mi cuenta button", () => {
      render(
        <Provider store={store}>
          <Router>
            <SignUp />
          </Router>
        </Provider>
      );
      const signUpButton = screen.getByRole("button");

      expect(signUpButton).toBeInTheDocument();
    });
  });
});
