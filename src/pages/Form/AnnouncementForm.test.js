import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "../../redux/store/store";
import { server } from "../../mocks/server/server";
import AnnouncementForm from "./AnnouncementForm";

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
  describe("When it is rendered", () => {
    test("Then it should render the inputs and the submit button", () => {
      let store = configureStore();
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
