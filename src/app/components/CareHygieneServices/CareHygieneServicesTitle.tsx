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
    <div className="my-10 py-5">
      <h2 className="pb-[16px] text-24 font-medium leading-[1.3] tracking-[-0.02em] desktop:mb-[40px] desktop:text-44">
        {title}
      </h2>
      <p className="text-14 leading-[1.5] desktop:text-16">
        <strong className="font-bold">{subtitleBold}</strong> {subtitle}
      </p>
    </div>
  );
};
