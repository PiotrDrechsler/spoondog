import { IconArrowRight } from "@/app/icons/IconArrowRight";

const Button = () => {
  return (
    <a
      href="/"
      className="group flex w-max items-center gap-[10px] rounded-full bg-gradient-btn px-[24px] py-[12px] shadow-button-shadow transition duration-300 ease-in-out hover:scale-[1.05] focus:scale-[1.05] group-hover:text-violet group-focus:text-violet lg:px-[32px] lg:py-[16px]"
    >
      <span className="font-medium leading-[1.5] transition duration-300 ease-in-out group-hover:text-violet group-focus:text-violet lg:text-lg lg:font-semibold">
        Dowiedz się więcej
      </span>
      <IconArrowRight className="size-3 fill-dark transition duration-300 ease-in-out group-hover:stroke-violet group-focus:stroke-violet lg:ml-1 lg:size-5" />
    </a>
  );
};

export default Button;
