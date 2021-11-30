import { render, screen } from "@testing-library/react";

import Home from "./Home";
import { BrowserRouter as Router } from "react-router-dom";

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
