import React, { ReactNode } from "react";

interface SectionProps {
  title: string;
  content: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, content }) => {
  return (
    <div className="mb-[26px]">
      <h3 className="mb-[16px] mt-[26px] text-[16px] font-semibold leading-[24px] tablet:text-18 tablet:leading-[27px]">
        {title}
      </h3>
      <div className="leading-6">{content}</div>
    </div>
  );
};

export default Section;
