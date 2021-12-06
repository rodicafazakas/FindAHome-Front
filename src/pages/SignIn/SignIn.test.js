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
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlNhbmRhIiwiY3VzdG9tZXJUeXBlIjoic2VsbGVyIiwiaWQiOiI2MTljY2RkOWFkZWRlOTQ0ODFkNWMyYWEiLCJpYXQiOjE2Mzg3MzQyMTJ9.f3BEXBQ6Q9YGTXZnOU3bzw5ywjUEoFOXoj0OPolv4K8",
        });
      });
    });
  });
});
