import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "../../redux/store/store";
import { server } from "../../mocks/server/server";
import AnnouncementForm from "./AnnouncementForm";
import userEvent from "@testing-library/user-event";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Given an AnnouncementForm component", () => {
  let store = configureStore();
  describe("When the user has not typed the price", () => {
    test("Then it should have a disabled button", () => {
      render(
        <Router>
          <Provider store={store}>
            <AnnouncementForm />
          </Provider>
        </Router>
      );
      const submitButton = screen.getAllByRole("button")[0];

      expect(submitButton).toBeDisabled();
    });
  });

  describe("When the user types in inputs", () => {
    test("Then it should change a value", () => {
      render(
        <Provider store={store}>
          <Router>
            <AnnouncementForm />
          </Router>
        </Provider>
      );

      userEvent.type(screen.getByPlaceholderText("Distrito"), `Born`);
      expect(screen.getByPlaceholderText("Distrito")).toHaveValue("Born");
    });
  });

  describe("When it is rendered", () => {
    test("Then it should render the inputs and the submit button", () => {
      render(
        <Provider store={store}>
          <Router>
            <AnnouncementForm />
          </Router>
        </Provider>
      );

      const submit = screen.getByLabelText("Añade fotos a tu anuncio");

      expect(submit).toBeInTheDocument();
    });
  });
});
