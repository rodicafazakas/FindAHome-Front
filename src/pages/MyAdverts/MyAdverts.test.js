import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "../../redux/store/store";
import MyAdverts from "./MyAdverts";

describe("Given a MyAdverts page", () => {
  let store = configureStore();
  describe("When it is rendered for a seller user", () => {
    test("Then it should show a button tu add a new announcement", () => {
      render(
        <Provider store={store}>
          <Router>
            <MyAdverts />
          </Router>
        </Provider>
      );
      const addButton = screen.getByRole("button", { name: "Añade un anuncio" });

      expect(addButton).toBeInTheDocument();
    });
  });
});
