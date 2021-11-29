import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: () => {
    return <svg />;
  },
}));

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Bienvenid@/i);
  expect(linkElement).toBeInTheDocument();
});
