interface SectionHeadingProps {
  sectionTitle?: string;
  sectionMainHeading: string;
  sectionInfo: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  sectionTitle,
  sectionMainHeading,
  sectionInfo,
}) => {
  return (
    <>
      <p className="mb-[12px] border-b pb-[2px] text-14 leading-[1.5] text-greyFont">
        {sectionTitle}
      </p>
      {/* h2 tag - important text for SEO! */}
      <h2 className="mb-[8px] text-26 font-bold leading-[1.2] tracking-tight">
        {sectionMainHeading}
      </h2>
      {/* in h3 tag - important text for SEO! */}
      <h3>{sectionInfo}</h3>
    </>
  );
};
