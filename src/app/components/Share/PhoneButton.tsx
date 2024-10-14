import { IconPhoneHeader } from "@/app/icons/IconPhoneHeader";
import { BaseButtonProps } from "@/app/utils/Types";

export const PhoneButton: React.FC<BaseButtonProps> = ({ content }) => {
  return (
    <a
      href="tel:+48692394385"
      className="group flex max-w-[240px] items-center justify-center gap-[10px] rounded-full bg-gradient-btn px-[30px] py-[12px] shadow-button-shadow transition duration-300 ease-in-out hover:scale-[1.05] focus:scale-[1.05] group-hover:text-violet group-focus:text-violet"
    >
      <IconPhoneHeader className="fill-dark transition duration-300 ease-in-out group-hover:fill-violet group-focus:fill-violet" />
      <span className="font-medium leading-[1.5] transition duration-300 ease-in-out group-hover:text-violet group-focus:text-violet">
        {content}
      </span>
    </a>
  );
};
