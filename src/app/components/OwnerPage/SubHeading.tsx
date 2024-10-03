import React from 'react';

interface Props {
  children: React.ReactNode;
}

const SubHeading: React.FC<Props> = ({ children }) => {
  return (
    <h3 className="font-medium text-[16px] leading-[24px] mb-[16px] mt-[26px] 
   tablet:text-18 tablet:leading-[27px] ">
      {children}
    </h3>
  );
};

export default SubHeading;