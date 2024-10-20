interface ClickOnMeTitleProps {
  id: string;
  text: string;
}

export const ClickOnMeTitle: React.FC<ClickOnMeTitleProps> = ({ text }) => {
  return (
    <div className="mb-4 flex justify-center">
      <div className="mb-[26px] desktop:mb-[60px]">
        <h2 className="mb-[10px] text-26 font-bold leading-[1.2] tracking-[-0.02em] desktop:mb-[8px] desktop:text-36">
          {text}
        </h2>
      </div>
    </div>
  );
};
