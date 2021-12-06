import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import jwtDecode from "jwt-decode";

import { announcementExample } from "../../factories/announcementFactory";
import configureStore from "../../redux/store/store";
import AnnouncementCard from "./AnnouncementCard";
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

jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: () => {
    return <svg />;
  },
}));

describe("Given an AnnouncementCard component", () => {
  describe("When it receives an announcement", () => {
    test("Then it should render a card", () => {
      const newAnnouncement = announcementExample;
      let store = configureStore();

      render(
        <Provider store={store}>
          <Router>
            <AnnouncementCard announcement={newAnnouncement} />
          </Router>
        </Provider>
      );
      window.localStorage = storageMock();
      const { token } = JSON.parse(window.localStorage.getItem("tokenizer"));
      const user = jwtDecode(token);
      
      const announcementCard = screen.getByRole("listitem");
      const cardImage = screen.getByRole("img", { name: "apartment" });

      expect(announcementCard).toBeInTheDocument();
      expect(cardImage).toHaveClass("card-image");
    });
  });
});
