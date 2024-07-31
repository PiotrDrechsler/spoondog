interface IconProps {
  className?: string;
}

export const IconArrowRight: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 20"
      strokeWidth="1.9"
      stroke="currentColor"
    >
      <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" fill="" />
    </svg>
  );
};
