type CaorouselButtonProps = {
  img: string;
  classNames?: string;
  onClick: () => void;
};

export default function CaorouselButton({
  img,
  classNames,
  onClick,
}: CaorouselButtonProps) {
  return (
    <button
      data-testid="caorousel-button"
      onClick={onClick}
      className={`absolute top-[42%] flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-primary shadow-[0px_6px_12px_rgba(249,192,106,0.22)] tablet:h-[82px] tablet:w-[82px] ${classNames}`}
    >
      <img data-testid="caorousel-btn-img" src={img} alt="arrow" />
    </button>
  );
}
