interface Props {
  children: React.ReactNode;
}

const AboutHeading: React.FC<Props> = ({ children }) => {
  return (
    <h2 className="mb-[40px] mt-[80px] text-center text-[22px] font-bold leading-[33px] tablet:text-[24px] tablet:leading-[36px] tablet:tracking-[-0.48px]">
      {children}
    </h2>
  );
};

export default AboutHeading;
