import { IconPhoneHeader } from "@/app/icons/IconPhoneHeader";

export const HeaderPhone = () => {
  return (
    <a
      href="tel:+48692394385"
      className="group flex items-center gap-[10px] rounded-full bg-gradient-btn px-[32px] py-[12px] transition duration-300 ease-in-out focus:text-violet group-hover:text-violet"
    >
      <IconPhoneHeader className="fill-dark transition duration-300 ease-in-out group-hover:fill-violet group-focus:fill-violet" />
      <span className="font-medium leading-[1.5] transition duration-300 ease-in-out group-hover:text-violet group-focus:text-violet">
        +48 692 394 385
      </span>
    </a>
  );
};
