import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./redux/store/store";

jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: () => {
    return <svg />;
  },
}));

test("renders announcements", () => {
  let store = configureStore();
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/Bienvenid@/i);
  expect(linkElement).toBeInTheDocument();
});
