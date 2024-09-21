import Container from "../Share/Container";
import { regulationsData } from "@/app/utils/regulationsData";

export const Regulations = () => {
  return (
    <section className="pb-[48px] pt-[100px] desktop:pt-[120px]">
      <Container>
        <h2 className="mb-[26px] text-center text-26 font-bold leading-[1.2] tracking-[-0.02em] desktop:mb-[60px] desktop:text-36">
          Regulamin salonu Spoondog
        </h2>
        <div className="w-full rounded-radius24 border-[1px] border-greyBorders bg-cream p-[20px] leading-[1.5] shadow-boxes-shadow desktop:p-[40px] desktop:text-18">
          <ol className="list-inside list-decimal">
            {regulationsData.map((item, index) => (
              <li key={index} className="mb-[10px]">
                {index === 0 && (
                  <span className="font-semibold">
                    WIZYTY UMAWIANE SĄ TELEFONICZNIE{" "}
                  </span>
                )}
                {item}
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
};
