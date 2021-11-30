import { render, screen } from "@testing-library/react";
import AnnouncementCard from "./AnnouncementCard";

describe("Given an AnnouncementCard component", () => {
  describe("When it receives an announcement", () => {
    test("Then it should render a card", () => {
      const newAnnouncement = {
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
      };

      render(<AnnouncementCard announcement={newAnnouncement} />);
      const announcementCard = screen.getByRole("listitem");

      expect(announcementCard).toBeInTheDocument();
    });
  });
});
