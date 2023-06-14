import { render, screen, fireEvent } from "@testing-library/react";
import CaorouselButton from ".";
import arrow_left from "../../assets/arrowleft.svg";

test("renders a button correctly", async () => {
  render(<CaorouselButton img={arrow_left} onClick={jest.fn()} />);
  expect(screen.queryByAltText("arrow")).toBeInTheDocument();
});

test("when the props onClick is passed, it calls an onClick event", async () => {
  const handleClick = jest.fn();

  render(<CaorouselButton img={arrow_left} onClick={handleClick} />);

  fireEvent.click(screen.getByTestId("caorousel-button"));
  expect(handleClick).toHaveBeenCalled();
});

test("when the props className is passed, it is added to element CSS classList", async () => {
  render(
    <CaorouselButton img={arrow_left} onClick={jest.fn()} classNames="left-0" />
  );
  expect(screen.getByTestId("caorousel-button")).toHaveClass("left-0");
});
