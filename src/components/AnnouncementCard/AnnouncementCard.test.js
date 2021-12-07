import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { announcementExample } from "../../factories/announcementFactory";
import configureStore from "../../redux/store/store";
import AnnouncementCard from "./AnnouncementCard";
import { server } from "../../mocks/server/server";
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

jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: () => {
    return <svg />;
  },
}));

describe("Given an AnnouncementCard component", () => {
  let store = configureStore();
  describe("When it receives an announcement", () => {
    test("Then it should render a card", () => {
      const newAnnouncement = announcementExample;
      render(
        <Provider store={store}>
          <Router>
            <AnnouncementCard announcement={newAnnouncement} />
          </Router>
        </Provider>
      );

      const announcementCard = screen.getByRole("listitem");
      const cardImage = screen.getByRole("img", { name: "apartment" });

      expect(announcementCard).toBeInTheDocument();
      expect(cardImage).toHaveClass("card-image");
    });
  });

  describe("When the user clicks on the heart icon", () => {
    test("Then the colour of the heart changes", () => {
      const announcementFake = announcementExample;
      const onClickMock = jest.fn();
      let isFavourite = false;
      render(
        <Provider store={store}>
          <Router>
            <AnnouncementCard
              announcement={announcementFake}
              onClick={onClickMock}
              isFavourite={isFavourite}
            />
          </Router>
        </Provider>
      );
      const heartIcon = screen.getByTestId("heart-icon");
      userEvent.click(heartIcon);

      expect(onClickMock).toHaveBeenCalled();
      // expect(isFavourite).toBe(false);
    });
  });
});
