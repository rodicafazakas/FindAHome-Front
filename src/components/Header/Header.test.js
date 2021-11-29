import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it renders", () => {
    test("Then it should show the logo", () => {
      render(
        <MemoryRouter initialEntries={["/"]}>
          <Header />
        </MemoryRouter>
      );

      const logo = screen.getByRole("navigation");

      expect(logo).toBeInTheDocument();
    });
  });
});
