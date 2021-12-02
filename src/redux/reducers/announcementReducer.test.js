import actionTypes from "../actions/actionTypes";
import announcementReducer from "./announcementReducer";

describe("Given an announcementReducer", () => {
  describe("When it receives a load action with a new announcement", () => {
    test("Then it should render the new announcement", () => {
      const initialState = {};
      const newAnnouncement = {
        price: 855000,
        images: [
          "https://prd.storagewhise.eu/public/latourpetit/Pictures/4568230/640/baaab301df4a42f9a94eda0b1c515853.jpg",
        ],
        area: 150,
        bedrooms: 4,
        bathrooms: 1,
        description:
          "It is located on the 6th floor and has a magnificent view. It is composed as follows: entrance hall, cloakroom, guest toilet with independent washbasin, living and dining room of ± 41 m², equipped kitchen of 15m², night hall leading to 4 bedrooms (± 10,4 - 11,5 - 13,5 and 16m² ), 1 bathroom and an independent shower room.",
        parking: false,
        terrace: true,
        elevator: true,
        city: "Barcelona",
        neighbourhood: "Sarria-Sant Gervasi",
        propertyType: "dwelling",
        dwellingType: "apartment",
        seller: "619ccdd9adede94481d5c2aa",
        address: {
          street: "Calle de Balmes",
          floor: 1,
          coordinates: {
            longitude: 200,
            latitude: 300,
          },
        },
      };
      const action = {
        type: actionTypes.loadAnnouncement,
        announcement: newAnnouncement,
      };

      const expectedAnnouncement = announcementReducer(initialState, action);

      expect(newAnnouncement).toEqual(expectedAnnouncement);
    });
  });
});
