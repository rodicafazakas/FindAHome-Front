import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { announcementExample } from "../../factories/announcementFactory";
import { userExample } from "../../factories/userFactory";
import configureStore from "../../redux/store/store";
import AnnouncementCard from "./AnnouncementCard";
import { server } from "../../mocks/server/server";

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
      const userFake = userExample;
      const user = {
        user: userFake,
      };
      render(
        <Provider store={store}>
          <Router>
            <AnnouncementCard announcement={newAnnouncement} user={user} />
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
    test("Then the colour of the heart changes", async () => {
      const announcementFake = announcementExample;
      const userFake = userExample;
      const user = {
        user: userFake,
      };
      let isFavourite = true;
      render(
        <Provider store={store}>
          <Router>
            <AnnouncementCard
              announcement={announcementFake}
              isFavourite={isFavourite}
              isListingPage={true}
              user={user}
            />
          </Router>
        </Provider>
      );
      const heartIcon = screen.getByTestId("heart-icon");
      fireEvent.click(heartIcon);

      await waitFor(async () => {
        expect(isFavourite).toBe(!isFavourite);
      });
    });
  });
});
