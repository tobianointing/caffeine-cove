import item1 from "../assets/item1.png";
import item2 from "../assets/item2.png";
import item3 from "../assets/item3.png";
import item4 from "../assets/item4.png";

import badge from "../assets/badge.svg";
import coffee_bean from "../assets/coffee-beans.svg";
import coffee_cup from "../assets/coffee-cup.svg";
import best_price from "../assets/best-price.svg";

export const coffeeItems = [
  {
    id: 1,
    img: item1,
    title: "Cappuccino",
    description: "Coffee 50% | Milk 50%",
    price: "$8.50",
  },
  {
    id: 2,
    img: item2,
    title: "Cappuccino",
    description: "Coffee 50% | Milk 50%",
    price: "$8.50",
  },
  {
    id: 3,
    img: item3,
    title: "Cappuccino",
    description: "Coffee 50% | Milk 50%",
    price: "$8.50",
  },
  {
    id: 4,
    img: item4,
    title: "Cappuccino",
    description: "Coffee 50% | Milk 50%",
    price: "$8.50",
  },
];

export const whyWeAreDifferentContents = [
  {
    id: 1,
    img: coffee_bean,
    title: "Supreme Beans",
    reason: "Beans that provides great taste",
  },
  {
    id: 2,
    img: badge,
    title: "High Quality",
    reason: "We provide the highest quality",
  },
  {
    id: 3,
    img: coffee_cup,
    title: "Extraordinary",
    reason: "Beans that provides great taste",
  },
  {
    id: 4,
    img: best_price,
    title: "Affordable Price",
    reason: "Beans that provides great taste",
  },
];

export const footerContent = [
  {
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
  },
  {
    header: "Company",
    menus: [
      {
        text: "How We Work",
        link: "/how-we-work",
      },
      {
        text: "Terms of Service",
        link: "/terms-of-service",
      },
      {
        text: "Pricing",
        link: "/pricing",
      },
      {
        text: "FAQs",
        link: "/faqs",
      },
    ],
  },
  {
    header: "Contact Us",
    menus: [
      {
        text: "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016",
      },
      {
        text: "+1 202-918-2132",
      },
      {
        text: "beanscene@mail.com",
      },
      {
        text: "www.beanscene.com",
        link: "https://www.beanscene.com",
      },
    ],
  },
];
