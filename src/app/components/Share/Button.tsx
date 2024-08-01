import { IconArrowRight } from "@/app/icons/IconArrowRight";

interface ButtonProps {
  href: string;
}

const Button: React.FC<ButtonProps> = ({ href }) => {
  return (
    <a
      href={href}
      className="shadow-button-shadow bg-gradient-btn group-hover:text-violet group-focus:text-violet desktop:py-[12px] group flex h-full w-full items-center justify-center gap-[10px] rounded-full px-[24px] py-[9px] transition duration-300 ease-in-out hover:scale-[1.05] focus:scale-[1.05]"
    >
      <span className="group-hover:text-violet group-focus:text-violet whitespace-nowrap text-sm font-medium leading-[1.5] transition duration-300 ease-in-out md:text-base lg:text-lg">
        Dowiedz się więcej
      </span>
      <IconArrowRight className="fill-dark group-hover:stroke-violet group-focus:stroke-violet size-3 transition duration-300 ease-in-out lg:ml-1 lg:size-5" />
    </a>
  );
};

export default Button;
