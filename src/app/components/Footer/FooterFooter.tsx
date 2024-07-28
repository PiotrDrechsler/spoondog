import { IconFacebook } from "@/app/icons/IconFacebook";
import { IconInstagram } from "@/app/icons/IconInstagram";

export const FooterFooter = () => {
  return (
    <div className="flex flex-col gap-[18px] border-t-[1px] border-solid border-dark pb-[40px] pt-[16px] desktop:flex-row desktop:items-center desktop:justify-between desktop:pb-[86px] desktop:pt-[32px]">
      <div className="flex flex-col gap-[24px] text-14 leading-[21px] desktop:flex-row">
        <p>2024</p>
        <a
          href="/regulations"
          className="underline transition duration-300 ease-in-out hover:text-violet focus:text-violet"
        >
          Regulamin
        </a>
      </div>
      <div className="flex gap-[12px]">
        <a href="" target="_blank">
          <IconFacebook />
        </a>
        <a href="" target="_blank">
          <IconInstagram />
        </a>
      </div>
    </div>
  );
};
