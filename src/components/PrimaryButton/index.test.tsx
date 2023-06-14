import { render, screen } from "@testing-library/react";
import PrimaryButton from "./index";

test("renders a button correctly", async () => {
  render(<PrimaryButton text="Order now" />);
  expect(screen.getByTestId("primary-button")).toHaveTextContent("Order now");
});
