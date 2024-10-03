interface SectionHeadingProps {
  sectionTitle?: string;
  sectionMainHeading: React.ReactNode;
  sectionInfo?: React.ReactNode; // Sometimes when you need to use tags like <strong> for better SEO for 1 word, ReactNode is a better solution.
  className?: string; // Optional prop for styling
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  sectionTitle = "", // Default value as an empty string
  sectionMainHeading,
  sectionInfo,
  className,
}) => {
  return (
    <section
      aria-labelledby={`section-heading-for-${sectionMainHeading}`}
      className={className}
    >
      {sectionTitle && (
        <p className="mb-[12px] border-b border-greyLightLines pb-[2px] text-14 leading-[1.5] text-greyFont desktop:border-none desktop:text-16">
          {sectionTitle}
        </p>
      )}
      {/* h2 tag - important text for SEO! */}
      <h2 className="mb-[8px] text-26 font-bold leading-[1.2] desktop:text-36">
        {sectionMainHeading}
      </h2>
      {/* h3 tag - important text for SEO! */}
      {sectionInfo && (
        <h3 className="text-16 leading-[1.5] desktop:text-18">{sectionInfo}</h3>
      )}
    </section>
  );
};
