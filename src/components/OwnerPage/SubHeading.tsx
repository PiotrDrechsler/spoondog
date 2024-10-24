interface Props {
  children: React.ReactNode;
}

const SubHeading: React.FC<Props> = ({ children }) => {
  return (
    <h3 className="mb-[16px] mt-[26px] text-[16px] font-semibold leading-[24px] tablet:text-18 tablet:leading-[27px]">
      {children}
    </h3>
  );
};

export default SubHeading;
