import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "../../redux/store/store";
import Listing from "./Listing";
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

describe("Given a Listing page", () => {
  let store = configureStore();
  describe("When it is rendered", () => {
    test("Then it should show a list of announcements", () => {
      const announcements = [
        {
          price: 355000,
          images: [
            "https://prd.storagewhise.eu/public/latourpetit/Pictures/4568230/640/baaab301df4a42f9a94eda0b1c515853.jpg",
          ],
          area: 100,
          bedrooms: 2,
          bathrooms: 2,
          description:
            "It is located on the 6th floor and has a magnificent view. It is composed as follows: entrance hall, cloakroom, guest toilet with independent washbasin, living and dining room of ± 41 m², equipped kitchen of 15m², night hall leading to 4 bedrooms (± 10,4 - 11,5 - 13,5 and 16m² ), 1 bathroom and an independent shower room.",
          parking: false,
          terrace: true,
          elevator: false,
          city: "Barcelona",
          neighbourhood: "Sarria-Sant Gervasi",
          propertyType: "dwelling",
          dwellingType: "apartment",
          seller: "619ccdd9adede94481d5c2aa",
          address: {
            street: "Calle de Balmes",
            floor: 6,
            coordinates: {
              longitude: 200,
              latitude: 300,
            },
          },
        },
      ];
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

  // describe("When the user clicks on an announcement", () => {
  //   test("Then the detailed info on the announcement should be rendered", async () => {
  //     const announcementCard = screen.getByRole("algo");
  //     userEvent.click(announcementCard);

  //     await waitFor(() => {
  //       const text = screen.queryByText("Rosi");
  //       expect(text).toBeInTheDocument();
  //     });
  //   });
  // });
});
