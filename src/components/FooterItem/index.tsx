type menuType = {
  text: string;
  link?: string;
};

type FooterItemProps = {
  header: string;
  menus: menuType[];
};

export default function FooterItem({ header, menus }: FooterItemProps) {
  return (
    <div data-testid="footer-item">
      <h1 className="mb-[1.5rem] text-[1.625rem] font-bold laptop:mb-[3.4375rem]">
        {header}
      </h1>
      <ul className="flex flex-col justify-between gap-[1.375rem] text-base tablet:text-lg">
        {menus.map((menu, index) => (
          <li key={index}>
            <a href={menu.link}>{menu.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
