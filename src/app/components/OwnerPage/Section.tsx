import React, { ReactNode }from 'react';

interface SectionProps {
  title: string;
  content: ReactNode; 
}

const Section: React.FC<SectionProps> = ({ title, content }) => {
  return (
   <div className="mb-[26px]">
      <h3 className="font-medium text-[16px] leading-[24px] mb-[16px] mt-[26px] 
    sm:text-[18px] sm:leading-[27px] 
    md:font-bold md:text-base md:leading-[27px]">
        {title}
      </h3>
      <div className="leading-6">{content}</div>
    </div>
  );
};

export default Section;
