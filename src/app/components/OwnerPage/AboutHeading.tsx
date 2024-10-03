
interface Props {
  children: React.ReactNode;
}

const AboutHeading: React.FC<Props> = ({ children }) => {
  return (
    <h2 className="text-center font-bold  text-[22px] leading-[33px] mb-[40px] mt-[80px] 
        tablet:text-[24px] tablet:leading-[36px] tablet:tracking-[-0.48px]">
      {children}
    </h2>
  );
};

export default AboutHeading;