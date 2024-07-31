interface IconProps {
  className?: string;
}

export const IconArrowAbout: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.3977 7.66292C7.17802 7.88259 6.82192 7.88259 6.60225 7.66292L0.867387 1.92804C0.64772 1.70837 0.64772 1.35227 0.867387 1.13259L1.13256 0.867393C1.35222 0.647718 1.70838 0.647718 1.92805 0.867393L6.99997 5.93934L12.0719 0.867393C12.2916 0.647718 12.6477 0.647718 12.8674 0.867393L13.1326 1.13259C13.3522 1.35227 13.3522 1.70837 13.1326 1.92804L7.3977 7.66292Z"
        fill=""
      />
    </svg>
  );
};
