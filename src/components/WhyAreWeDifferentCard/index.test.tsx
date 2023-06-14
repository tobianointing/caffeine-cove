import { render, screen } from "@testing-library/react";
import WhyAreWeDifferentCard from "./index";
import coffee_bean from "../../assets/coffee-beans.svg";

test("renders <WhyAreWeDifferentCard/> correctly", async () => {
  render(
    <WhyAreWeDifferentCard
      id={1}
      img={coffee_bean}
      title={"Good Prices"}
      reason="We the best"
    />
  );
  expect(screen.getByTestId("whyarewedifferentcard")).toHaveTextContent(
    /Good Prices/i
  );
  expect(screen.getByTestId("whyarewedifferentcard")).toHaveTextContent(
    /We the best/i
  );
  expect(screen.queryByAltText(/icon/i)).toBeInTheDocument();
});
