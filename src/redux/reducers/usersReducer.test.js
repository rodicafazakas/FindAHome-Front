import { loginUserAction } from "../actions/actionCreators";
import usersReducer from "./usersReducer";

describe("Given a usersReducer component", () => {
  describe("When it receives an object with an isAutheticated property as false and an empty user object and a login action with an user", () => {
    test("Then it should return a new user with isAutenticated set to true", () => {
      const userExample = {
        name: "Vero",
        username: "nica",
        password: "Veronica",
        phoneNumber: "645653748",
        favourites: [],
        adverts: [],
        customerType: "buyer",
      };
      const expectedUser = {
        isAuthenticated: true,
        user: userExample,
      };
      const action = loginUserAction(userExample);

      const newUser = usersReducer(userExample, action);

      expect(newUser).toEqual(expectedUser);
    });
  });
});
