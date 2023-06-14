import { render, screen } from "@testing-library/react";
import FooterItem from "./index";

const data = {
  header: "About",
  menus: [
    {
      text: "Menu",
      link: "/menu",
    },
    {
      text: "Features",
      link: "/features",
    },
    {
      text: "News & Blogs",
      link: "/news-blogs",
    },
    {
      text: "Help & Supports",
      link: "/help-supports",
    },
  ],
};

test("renders <FooterItem/> correctly", async () => {
  render(<FooterItem header={data.header} menus={data.menus} />);
  expect(screen.getByTestId("footer-item")).toHaveTextContent(/About/i);
  expect(screen.getByTestId("footer-item")).toHaveTextContent(/News & Blogs/i);
});
