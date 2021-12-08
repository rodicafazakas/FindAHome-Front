import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./Header";
import configureStore from "../../redux/store/store";
import { server } from "../../mocks/server/server";
import { userExample } from "../../factories/userFactory";

jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: () => {
    return <svg />;
  },
}));

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Given a Header component", () => {
  let store = configureStore();
  describe("When it renders", () => {
    test("Then it should show the logo", () => {
      render(
        <Provider store={store}>
          <Router>
            <Header />
          </Router>
        </Provider>
      );

      const link = screen.getByText("Acceder");

      expect(link).toBeInTheDocument();
    });
  });

  describe("When you click the logo", () => {
    test("Then it navigates home", () => {
      render(
        <Provider store={store}>
          <Router>
            <Header />
          </Router>
        </Provider>
      );

      const goHomeLink = screen.getAllByRole("link", { name: "FindAHome" })[0];
      userEvent.click(goHomeLink);

      expect(goHomeLink).toHaveAttribute("href", "/");
    });
  });

  describe("When the user is authenticated", () => {
    test("Then the header shows a salir button", () => {
      const userFake = userExample;
      const user = {
        isAuthenticated: true,
        user: userFake,
      };
      render(
        <Provider store={store}>
          <Router>
            <Header user={user} />
          </Router>
        </Provider>
      );

      const linkElement = screen.getByRole("button", { name: "Salir" });
      expect(linkElement).toBeInTheDocument();
    });
  });
});
