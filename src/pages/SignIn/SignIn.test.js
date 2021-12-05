import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "../../redux/store/store";
import userEvent from "@testing-library/user-event";

import SignIn from "./SignIn";
import { server } from "../../mocks/server/server";
import { storageMock } from "../../mocks/storage/storage";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Given a SignIn component", () => {
  let store = configureStore();

  describe("When the user has not typed the username", () => {
    test("Then it should have a disabled button", () => {
      render(
        <Router>
          <Provider store={store}>
            <SignIn />
          </Provider>
        </Router>
      );
      const addButton = screen.getByRole("button", {
        name: "Iniciar Session",
      });

      expect(addButton).toBeDisabled();
    });
  });

  describe("When it is rendered", () => {
    test("Then it should show a Iniciar session button", () => {
      render(
        <Provider store={store}>
          <Router>
            <SignIn />
          </Router>
        </Provider>
      );
      const signInButton = screen.getByRole("button");

      expect(signInButton).toBeInTheDocument();
    });

    test("the token is stored correctly", async () => {
      render(
        <Provider store={store}>
          <Router>
            <SignIn />
          </Router>
        </Provider>
      );
      window.localStorage = storageMock();
      await userEvent.type(screen.getByPlaceholderText("Username"), "Rodipet");
      await userEvent.type(screen.getByPlaceholderText("Password"), "holaciao");

      userEvent.click(screen.getByRole("button"));

      await waitFor(async () => {
        expect(JSON.parse(window.localStorage.getItem("tokenizer"))).toEqual({
          token: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
        });
      });
    });
  });
});
