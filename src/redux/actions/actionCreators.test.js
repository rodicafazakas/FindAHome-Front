import {
  deleteAnnouncementAction,
  loadAnnouncementsAction,
} from "./actionCreators";
import actionTypes from "./actionTypes";

describe("Given a load action creator", () => {
  describe("When it receives a list of announcements and a load action", () => {
    test("Then it should return a load type action (object) with the announcements received", () => {
      const announcementsList = [
        {
          price: 550000,
          images: [
            "https://prd.storagewhise.eu/public/latourpetit/Pictures/4568230/640/baaab301df4a42f9a94eda0b1c515853.jpg",
          ],
          area: 160,
          bedrooms: 4,
          bathrooms: 2,
          description:
            "It is located on the 6th floor and has a magnificent view. It is composed as follows: entrance hall, cloakroom, guest toilet with independent washbasin, living and dining room of ± 41 m², equipped kitchen of 15m², night hall leading to 4 bedrooms (± 10,4 - 11,5 - 13,5 and 16m² ), 1 bathroom and an independent shower room.",
          parking: false,
          terrace: false,
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
      const expectedAction = {
        type: actionTypes.loadAnnouncements,
        announcements: announcementsList,
      };

      const resultAction = loadAnnouncementsAction(announcementsList);

      expect(resultAction).toEqual(expectedAction);
    });
  });
});

describe("Given a delete action creator", () => {
  describe("When it receives an id", () => {
    test("Then it should return a delete type action for the id received", () => {
      const id = 2;
      const expectedAction = {
        type: actionTypes.deleteAnnouncement,
        id,
      };

      const resultAction = deleteAnnouncementAction(id);

      expect(expectedAction).toEqual(resultAction);
    });
  });
});
