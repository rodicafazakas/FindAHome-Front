import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "../../redux/store/store";
import Detail from "./Detail";

describe("Given a Detail component", () => {
  describe("When it is rendered", () => {
    test("Then it should render the information of the respective announcement", () => {
      let store = configureStore();
      render(
        <Provider store={store}>
          <Router>
            <Detail />
          </Router>
        </Provider>
      );

      const announcementImage = screen.getByRole("img", { name: "apartment" });
      const announcementPrice = screen.getByRole("button");

      expect(announcementImage).toBeInTheDocument();
      expect(announcementPrice).toBeInTheDocument();
    });
  });
});
