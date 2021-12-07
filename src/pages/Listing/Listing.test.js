import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";

import configureStore from "../../redux/store/store";
import Listing from "./Listing";
import { server } from "../../mocks/server/server";
import { announcementExample } from "../../factories/announcementFactory";
import { Simulate } from "react-dom/test-utils";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Given a Listing page", () => {
  let store = configureStore();
  describe("When it is rendered", () => {
    test("Then it should show a list of announcements", () => {
      const announcements = [announcementExample];
      render(
        <Provider store={store}>
          <Router>
            <Listing announcements={announcements} />
          </Router>
        </Provider>
      );

      const announcementsList = screen.getByRole("list");
      expect(announcementsList).toBeInTheDocument();
    });
  });

  describe("When the user clicks on an announcement", () => {
    test("Then it should navigate to the detail page", () => {
      const history = createBrowserHistory();
      const announcement = announcementExample;
      render(
        <Provider store={store}>
          <Router history={history}>
            <Listing />
          </Router>
        </Provider>
      );
      const announcementCard = screen.getByRole("list");
      Simulate.click(announcementCard);
      history.push(`/announcements/${announcement.id}`);

      expect(history.location.pathname).toEqual(
        `/announcements/${announcement.id}`
      );
    });
  });

  describe("When the user clicks on filters", () => {
    test("Then it should navigate to the filters page", () => {
      const history = createBrowserHistory();
      const city = "Barcelona";
      render(
        <Provider store={store}>
          <Router history={history}>
            <Listing />
          </Router>
        </Provider>
      );
      const filterElement = screen.getByTestId("filters");
      Simulate.click(filterElement);
      history.push(`/announcements/${city}/filters`);

      expect(history.location.pathname).toEqual(
        `/announcements/${city}/filters`
      );
    });
  });
});
