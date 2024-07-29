import { IconPhoneHeader } from "@/app/icons/IconPhoneHeader";

export const PhoneButton = () => {
  return (
    <a
      href="tel:+48692394385"
      className="shadow-button-shadow group flex items-center gap-[10px] rounded-full bg-gradient-btn px-[32px] py-[12px] transition duration-300 ease-in-out hover:scale-[1.05] focus:scale-[1.05] group-hover:text-violet group-focus:text-violet"
    >
      <IconPhoneHeader className="fill-dark transition duration-300 ease-in-out group-hover:fill-violet group-focus:fill-violet" />
      <span className="font-medium leading-[1.5] transition duration-300 ease-in-out group-hover:text-violet group-focus:text-violet">
        +48 692 394 385
      </span>
    </a>
  );
};
