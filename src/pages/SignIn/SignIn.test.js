import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "../../redux/store/store";

import SignIn from "./SignIn";

describe("Given a SignIn component", () => {
  let store = configureStore();
  describe("When it is rendered", () => {
    test("Then it should show a Iniciar session button", () => {
      render(
        <Provider store={store}>
          <Router>
            <SignIn />
          </Router>
        </Provider>
      );
      const signInButton = screen.getByRole("button");

      expect(signInButton).toBeInTheDocument();
    });
  });
});
