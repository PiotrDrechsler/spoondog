import newOfferBefore from "@images/newOfferBefore.png";
import newOfferAfter from "@images/newOfferAfter.png";
import { NewOfferImg } from "./NewOfferImg";
import Button from "../Share/Button";
import Container from "../Share/Container";

export const NewOffer = () => {
  return (
    <section id="newOffer" className="pt-[10px]">
      <Container>
        <div className="mx-auto my-[12px] w-full max-w-[364px] tablet:max-w-[624px] rounded-radius24 border-2 bg-cream py-[40px] shadow-boxes-shadow desktop:my-0 desktop:max-w-[1440px] desktop:px-[100px]">
          <div className="tablet:space-x-auto xxl:flex-row flex flex-col items-center tablet:mx-[10px] tablet:justify-center xl:flex-row desktop:flex-row desktop:justify-center desktop:space-x-[140px]">
            {/* Left Column - Texts and Button */}
            <div className="flex w-[292px] flex-col items-center tablet:w-[50vw] desktop:w-[328px]">
              <div className="h-[32px] border-b-[1px] border-b-greyLightLines text-center text-[20px] font-normal leading-[24px]">
                <p>Nowość w salonie</p>
              </div>
              <div className="my-[36px] flex h-auto w-[250px] flex-col gap-[16px] py-[20px] text-center desktop:my-0 tablet:w-[450px] desktop:w-[376px] desktop:py-[42px]">
                <p className="text-[18px] font-bold leading-[1.3] desktop:text-[28px] desktop:leading-[1.2]">
                  Zobacz nową usługę w naszym salonie
                </p>

                <div className="w-auto">
                  <p className="text-[16px] font-normal tracking-[-0.02em] desktop:text-[22px] desktop:leading-[1.3]">
                    Ultradźwiękowa metoda ściągania kamienia nazębnego
                  </p>
                </div>
              </div>
              {/* Button only for desktop */}
              <div className="hidden h-[52px] w-[259px] tablet:mx-auto tablet:hidden desktop:block">
                <Button
                  href="/hygiene-services#teeth"
                  content="Dowiedz się więcej"
                />
              </div>
            </div>
            {/* Right column - Images */}
            <div className="relative mx-auto mb-[36px] h-[234px] w-full max-w-[250px] desktop:mb-0 desktop:h-[432px] desktop:max-w-[510px] desktop:space-x-[140px]">
              <NewOfferImg
                imageSrc={newOfferBefore}
                title="Przed"
                positionClass="top-0 left-0"
              />
              <NewOfferImg
                imageSrc={newOfferAfter}
                title="Po"
                positionClass="bottom-0 right-0"
              />
            </div>
            <div className="flex items-center justify-center desktop:hidden">
              <div className="block h-[42px] w-[210px] tablet:block desktop:hidden">
                <Button
                  href="/hygiene-services#teeth"
                  content="Dowiedz się więcej"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
