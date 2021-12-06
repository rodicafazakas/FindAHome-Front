import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://proyecto-final-rodica-back.herokuapp.com/announcements",
    async (req, res, ctx) => {
      return res(
        ctx.json([
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
          {
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
          },
        ])
      );
    }
  ),

  rest.post(
    "https://proyecto-final-rodica-back.herokuapp.com/users/login",
    async (req, res, ctx) => {
      const { username, password } = req.body;
      return res(
        ctx.json({
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlNhbmRhIiwiY3VzdG9tZXJUeXBlIjoic2VsbGVyIiwiaWQiOiI2MTljY2RkOWFkZWRlOTQ0ODFkNWMyYWEiLCJpYXQiOjE2Mzg3MzQyMTJ9.f3BEXBQ6Q9YGTXZnOU3bzw5ywjUEoFOXoj0OPolv4K8",
          username,
          password,
        })
      );
    }
  ),
];
