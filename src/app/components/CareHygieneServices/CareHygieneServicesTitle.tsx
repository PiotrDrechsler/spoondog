interface HygieneServicesTitleProps {
  title: string;
  subtitle: string;
  subtitleBold: string;
}

export const CareHygieneServicesTitle: React.FC<HygieneServicesTitleProps> = ({
  title,
  subtitle,
  subtitleBold,
}) => {
  return (
    <div>
      <h2 className="mb-[16px] text-24 font-medium leading-[1.3] tracking-[-0.02em] desktop:mb-[40px] desktop:text-44">
        {title}
      </h2>
      <p className="text-14 leading-[1.5] desktop:text-16">
        <span className="font-bold">{subtitleBold}</span> {subtitle}
      </p>
    </div>
  );
};
