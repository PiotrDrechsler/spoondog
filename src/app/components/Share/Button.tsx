import { IconArrowRight } from "@/app/icons/IconArrowRight";

interface ButtonProps {
  href: string;
}

const Button: React.FC<ButtonProps> = ({ href }) => {
  return (
    <a
      href={href}
      className="w-max h-full shadow-button-shadow bg-gradient-btn group-hover:text-violet group-focus:text-violet group flex max-w-[219px] items-center gap-[10px] rounded-full px-[24px] py-[12px] transition duration-300 ease-in-out hover:scale-[1.05] focus:scale-[1.05]"
    >
      <span className="group-hover:text-violet group-focus:text-violet font-medium leading-[1.5] transition duration-300 ease-in-out">
        Dowiedz się więcej
      </span>
      <IconArrowRight className="fill-dark group-hover:stroke-violet group-focus:stroke-violet size-3 transition duration-300 ease-in-out lg:ml-1 lg:size-5" />
    </a>
  );
};

export default Button;
