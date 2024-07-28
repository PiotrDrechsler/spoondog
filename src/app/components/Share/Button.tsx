import { IconArrowRight } from "@/app/icons/IconArrowRight";

const Button = () => {
  return (
    <button className="btn-gradient flex rounded-xl px-6 py-4 font-medium">
      <p className="mr-3">Dowiedz się więcej</p> <IconArrowRight />
    </button>
  );
};

export default Button;
