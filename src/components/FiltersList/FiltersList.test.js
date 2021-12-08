import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import configureStore from "../../redux/store/store";
import FiltersList from "./FiltersList";
import userEvent from "@testing-library/user-event";

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

      const neighbourhoodFilter = screen.getByPlaceholderText("Distrito");
      const submit = screen.getByRole("button", { name: "Buscar" });

      expect(neighbourhoodFilter).toBeInTheDocument();
      expect(submit).toBeInTheDocument();
    });
  });

  describe("When we add more filters", () => {
    test("Then the url is updated with the new announcement params", async () => {
      const city = "Barcelona";
      // eslint-disable-next-line no-unused-vars
      let testHistory;
      let testLocation;
      render(
        <MemoryRouter initialEntries={[`/announcements/${city}/filters`]}>
          <Router>
            <FiltersList />
          </Router>
        </MemoryRouter>
      );
      const neighbourhoodInput = "Born";
      await userEvent.type(screen.getByPlaceholderText("Distrito"), {
        neighbourhoodInput,
      });

      expect(testLocation.pathname).toBe(
        `/announcements/${city}/filters?neighbourhood=${neighbourhoodInput}`
      );
      const searchParams = new URLSearchParams(testLocation.search);
      expect(searchParams.has("neighbourhood")).toBe(true);
      expect(searchParams.get("neighbourhood")).toEqual("Born");
    });
  });
});
