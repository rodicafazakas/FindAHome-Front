import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: () => {
    return <svg />;
  },
}));

describe("Given a Header component", () => {
  describe("When it renders", () => {
    test("Then it should show the logo", () => {
      render(
        <MemoryRouter initialEntries={["/"]}>
          <Header />
        </MemoryRouter>
      );

      const link = screen.getByText("Acceder");

      expect(link).toBeInTheDocument();
    });
  });
});