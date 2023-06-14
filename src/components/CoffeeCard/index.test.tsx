import { render, screen } from "@testing-library/react";
import CoffeeCard from "./index";
import item4 from "../../assets/item4.png";

test("renders <CoffeeCard/> correctly", async () => {
  render(
    <CoffeeCard
      id={1}
      img={item4}
      title={"Coffee tea"}
      description={"the best"}
      price={"29.9"}
    />
  );
  expect(screen.getByTestId("coffee-card")).toHaveTextContent(/Coffee tea/i);
  expect(screen.getByTestId("coffee-card")).toHaveTextContent(/the best/i);
  expect(screen.getByTestId("coffee-card")).toHaveTextContent(/29.9/i);
  expect(screen.queryByAltText(/item image/i)).toBeInTheDocument();
});
