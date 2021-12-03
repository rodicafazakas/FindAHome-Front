import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "../../redux/store/store";
import Profile from "./Profile";

describe("Given a Profile page", () => {
  let store = configureStore();
  describe("When it is rendered for a seller user", () => {
    test("Then it should show a button tu add a new announcement", () => {
      render(
        <Provider store={store}>
          <Router>
            <Profile />
          </Router>
        </Provider>
      );
      const addButton = screen.getByRole("button");

      expect(addButton).toBeInTheDocument();
    });
  });
});
