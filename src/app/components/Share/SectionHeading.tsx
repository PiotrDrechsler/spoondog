interface SectionHeadingProps {
  sectionTitle: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  sectionTitle,
}) => {
  return (
    <>
      <h2>{sectionTitle}</h2>
    </>
  );
};
