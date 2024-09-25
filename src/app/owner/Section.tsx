import React, { ReactNode }from 'react';

interface SectionProps {
  title: string;
  content: ReactNode; 
}

const Section: React.FC<SectionProps> = ({ title, content }) => {
  return (
   <div className="mb-[26px]">
      <h3 className="font-bold text-base leading-[27px] mt-[26px] mb-[16px]">
        {title}
      </h3>
      <div className="leading-6">{content}</div>
    </div>
  );
};

export default Section;
