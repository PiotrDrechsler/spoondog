import { IconPhoneHeader } from "@/app/icons/IconPhoneHeader";

export const PhoneButton = () => {
  return (
    <a
      href="tel:+48692394385"
      className="shadow-button-shadow bg-gradient-btn group-hover:text-violet group-focus:text-violet group flex max-w-[243px] items-center gap-[10px] rounded-full px-[32px] py-[12px] transition duration-300 ease-in-out hover:scale-[1.05] focus:scale-[1.05]"
    >
      <IconPhoneHeader className="fill-dark group-hover:fill-violet group-focus:fill-violet transition duration-300 ease-in-out" />
      <span className="group-hover:text-violet group-focus:text-violet font-medium leading-[1.5] transition duration-300 ease-in-out">
        +48 692 394 385
      </span>
    </a>
  );
};
