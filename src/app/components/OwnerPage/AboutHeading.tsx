
interface Props {
  children: React.ReactNode;
}

const AboutHeading: React.FC<Props> = ({ children }) => {
  return (
    <h2 className="text-center font-bold  text-[22px] leading-[33px] tracking-[-0.02em] mb-[40px] mt-[80px] 
        sm:text-[24px] sm:leading-[36px] 
        md:text-2xl md:leading-9 md:tracking-tight">
      {children}
    </h2>
  );
};

export default AboutHeading;