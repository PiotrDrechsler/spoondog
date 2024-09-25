import React from 'react';

interface Props {
  children: React.ReactNode;
}

const SubHeading: React.FC<Props> = ({ children }) => {
  return (
    <h3 className="font-bold text-base leading-[27px] mb-[16px] mt-[26px]">
      {children}
    </h3>
  );
};

export default SubHeading;