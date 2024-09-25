import React from 'react';

interface Props {
  children: React.ReactNode;
}

const AboutHeading: React.FC<Props> = ({ children }) => {
  return (
    <h2 className="text-center font-dm-sans font-bold text-2xl leading-9 tracking-tight mb-[40px] mt-[80px]">
      {children}
    </h2>
  );
};

export default AboutHeading;