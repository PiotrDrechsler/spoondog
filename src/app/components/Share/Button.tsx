import { IconArrowRight } from "@/app/icons/IconArrowRight";

interface ButtonProps {
  href: string;
  content: string;
}

const Button: React.FC<ButtonProps> = ({ href, content }) => {
  return (
    <a
      href={href}
      className="group flex h-full w-full items-center justify-center gap-[10px] rounded-full bg-gradient-btn px-[20px] py-[12px] shadow-button-shadow transition duration-300 ease-in-out hover:scale-[1.05] focus:scale-[1.05] group-hover:text-violet group-focus:text-violet desktop:px-[32px] desktop:py-[16px]"
    >
      <span className="whitespace-nowrap text-sm font-medium leading-[1.5] transition duration-300 ease-in-out group-hover:text-violet group-focus:text-violet tablet:text-base desktop:text-16">
        {content}
      </span>
      <IconArrowRight className="size-4 fill-dark transition duration-300 ease-in-out group-hover:stroke-violet group-focus:stroke-violet desktop:ml-1 desktop:size-5" />
    </a>
  );
};

export default Button;
