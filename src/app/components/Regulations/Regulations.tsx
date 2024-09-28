import Container from "../Share/Container";
import { regulationsData } from "@/app/utils/regulationsData";

export const Regulations = () => {
  return (
    <section className="h-full w-full pb-[40px] pt-[100px] desktop:pb-[226px] desktop:pt-[120px]">
      <Container>
        <h2 className="mb-[26px] text-center text-24 font-bold leading-[28.8px] tracking-[-0.48px] desktop:mb-[60px] desktop:text-44 desktop:leading-[52.8px] desktop:tracking-[-1.76px]">
          Regulamin salonu Spoondog
        </h2>
        <div className="shadow-reg-shadow w-full rounded-radius24 border-[1px] border-black bg-cream px-[16px] py-[24px] text-14 leading-[21px] desktop:p-[60px] desktop:text-18 desktop:leading-[27px]">
          <ol className="list-inside list-decimal">
            {regulationsData.map((item, index) => (
              <li key={index} className="mb-[10px]">
                {index === 0 && (
                  <span className="mr-4 font-medium tablet:m-0">
                    WIZYTY UMAWIANE SĄ TELEFONICZNIE -{" "}
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
