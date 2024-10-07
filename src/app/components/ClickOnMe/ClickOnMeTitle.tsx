import React from "react";

interface ClickOnMeTitleProps {
  id: string;
  text: string;
}

export const ClickOnMeTitle: React.FC<ClickOnMeTitleProps> = ({ text }) => {
    return (
      <div className="mb-4 flex justify-center">
      <div className="desktop:mb-[60px] mb-[26px]">
        <h2 className="text-26 desktop:mb-[8px] desktop:text-36 mb-[10px] font-bold leading-[1.2] tracking-[-0.02em]">
          {text}
        </h2>
      </div>
      </div>
    );
  };