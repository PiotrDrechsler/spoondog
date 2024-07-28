import { IconArrowRight } from "@/app/icons/IconArrowRight";

const Button = () => {
  return (
    <button className="btn-gradient shadow-button-shadow flex items-center rounded-full px-6 py-3 font-medium">
      <p className="mr-3">Dowiedz się więcej</p> <IconArrowRight />
    </button>
  );
};

export default Button;
