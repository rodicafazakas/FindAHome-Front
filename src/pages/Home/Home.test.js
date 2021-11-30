import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "./Home";

jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: () => {
    return <svg />;
  },
}));

describe("Given a Home component", () => {
  describe("When it renders", () => {
    test("Then it should display an search input", () => {
      render(
        
        <Router>
          <Home />
        </Router>
      );
      const searchInput = screen.getByRole("textbox");

      expect(searchInput).toBeInTheDocument();
    });
  });

  describe("When it is rendered", () => {
    test("Then it should display an submit button", () => {
      render(
        <Router>
          <Home />
        </Router>
      );
      const submitButton = screen.getByRole("button", { name: "Buscar" });

      expect(submitButton).toBeInTheDocument();
    });
  });
});
