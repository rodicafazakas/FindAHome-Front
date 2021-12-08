import { userExample } from "../../factories/userFactory";
import {
  loadUserAction,
  loggedUserAction,
  loginUserAction,
  logoutUserAction,
  registerUserAction,
} from "../actions/actionCreators";
import usersReducer from "./usersReducer";

describe("Given a usersReducer component", () => {
  describe("When it receives an object with an isAutheticated property as false and an empty user object and a login action with an user", () => {
    test("Then it should return a new user with isAutenticated set to true", () => {
      const user = userExample;
      const expectedUser = {
        isAuthenticated: true,
        user: user,
      };
      const action = loginUserAction(user);

      const newUser = usersReducer(user, action);

      expect(newUser).toEqual(expectedUser);
    });
  });

  describe("When it receives a logout action", () => {
    test("Then it should return an object with property isAuthenticated set to false and an empty user", () => {
      const user = userExample;
      const expectedUser = {
        isAuthenticated: false,
        user: {},
      };
      const action = logoutUserAction(user);
      const newUser = usersReducer(user, action);
      expect(newUser).toEqual(expectedUser);
    });
  });

  describe("When it receives a register action", () => {
    test("Then it should return an object with property isAuthenticated set to false and a new user", () => {
      const user = userExample;
      const expectedUser = {
        isAuthenticated: false,
        user: user,
      };
      const action = registerUserAction(user);
      const newUser = usersReducer(user, action);
      expect(newUser).toEqual(expectedUser);
    });
  });

  describe("When it receives a logged action", () => {
    test("Then it should return an object with property isAuthenticated set to true and a new user", () => {
      const userFake = userExample;
      const initialUser = {
        isAuthenticated: false,
        user: userFake,
      };
      const expectedUser = {
        isAuthenticated: true,
        user: userFake,
      };
      const action = loggedUserAction(userFake);
      const newUser = usersReducer(initialUser, action);
      expect(newUser).toEqual(expectedUser);
    });
  });

  describe("When it receives a loadUser action", () => {
    test("Then it should return an object with property isAuthenticated set to true and a new user", () => {
      const userFake = userExample;
      const initialUser = {
        isAuthenticated: false,
        user: userFake,
      };
      const expectedUser = {
        isAuthenticated: true,
        user: userFake,
      };
      const action = loadUserAction(userFake);
      const newUser = usersReducer(initialUser, action);
      expect(newUser).toEqual(expectedUser);
    });
  });
});
