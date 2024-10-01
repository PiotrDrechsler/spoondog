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
      <p>{sectionTitle}</p>
      <h2>{sectionMainHeading}</h2> {/* text important for SEO */}
      <h3>{sectionInfo}</h3> {/* text important for SEO */}
    </>
  );
};
