import { IconGoogle } from "@/app/icons/IconGoogle";

export const GoogleReviewCard = () => {
  return (
    <div className="shadow-google-shadow font-jakarta flex h-[81px] w-[85px] flex-col items-center justify-between rounded-md bg-white p-[4px] text-[#6A6A6A]">
      <p className="text-16 font-bold">Google</p>
      <p className="text-12">Opinie</p>
      <IconGoogle className="m-[5px] size-8" />
    </div>
  );
};

export default GoogleReviewCard;
