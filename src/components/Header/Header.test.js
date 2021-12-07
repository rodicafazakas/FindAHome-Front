import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { storageMock } from "../../mocks/storage/storage";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./Header";
import configureStore from "../../redux/store/store";
import { server } from "../../mocks/server/server";

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

  describe("When you click the logo", () => {
    test("Then it navigates home", () => {
      const root = document.createElement("div");
      document.body.appendChild(root);
      render(
        <MemoryRouter initialEntries={["/login"]}>
          <Header />
        </MemoryRouter>,
        root
      );

      const goHomeLink = screen.getAllByRole("link", { name: "FindAHome" })[0];
      userEvent.click(goHomeLink);
      // console.log(document.body.textContent);

      expect(document.body.textContent).toBe("Bienvenid@");
    });
  });

  describe("If there is a token in the local storage", () => {
    test("Then the header shows a salir button", async () => {
      let store = configureStore();
      render(
        <Provider store={store}>
          <Router>
            <Header />
          </Router>
        </Provider>
      );
      window.localStorage = storageMock();
      await waitFor(async () => {
        JSON.parse(window.localStorage.getItem("tokenizer"));
      });

      const linkElement = screen.getByRole("link", { name: "Salir" });
      expect(linkElement).toBeInTheDocument();
    });
  });
});
