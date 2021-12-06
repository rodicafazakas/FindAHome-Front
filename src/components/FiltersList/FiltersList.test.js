import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "../../redux/store/store";
import FiltersList from "./FiltersList";

describe("Given a FiltersList component", () => {
  describe("When it is rendered", () => {
    test("Then it should render the inputs and a submit button", () => {
      let store = configureStore();
      render(
        <Provider store={store}>
          <Router>
            <FiltersList />
          </Router>
        </Provider>
      );

      const submit = screen.getByRole("button", {name: 'Buscar'});

      expect(submit).toBeInTheDocument();
    });
  });
});
