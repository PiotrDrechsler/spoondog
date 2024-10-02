import { IconGoogle } from "@/app/icons/IconGoogle";

export const GoogleReviewCard = () => {
  return (
    <div className="shadow-google-shadow font-jakarta flex h-[81px] w-[85px] flex-col items-center justify-between rounded-3xl bg-white p-[5px] text-[#6A6A6A] desktop:h-[223px] desktop:w-[235px] desktop:p-[32px]">
      <p className="text-16 font-bold desktop:text-36">Google</p>
      <p className="text-12 desktop:text-18">Opinie</p>
      <IconGoogle className="m-[5px] size-8 desktop:size-20" />
    </div>
  );
};

export default GoogleReviewCard;
