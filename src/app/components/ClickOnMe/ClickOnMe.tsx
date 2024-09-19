import {ClickOnMeImg} from './ClickOnMeImg'
import {ClickOnMeTitle} from './ClickOnMeTitle'
import Container from "../Share/Container";
import { ClickOnMeArrow } from './ClickOnMeArrow';
import { ClickOnMeIcon } from './ClickOnMeIcon';

export const ClickOnMe = () => {
    return (
      <section id="clickOnMe">
        <Container>
            <div className='relative'>
                <div className='text-[#151513] text-center font-dm-sans text-[32px] font-medium leading-[48px] tracking-[-0.64px]'>
                <ClickOnMeTitle />
                </div>
                <div className="absolute left-[480px] top-[56px]">
                <ClickOnMeArrow />
                </div>
                <div className='flex justify-center mb-4'>
                    <div className="relative w-[360px] h-[765px]">
                    <ClickOnMeImg />
                        <div className="absolute left-[217px] top-[36.8px]">
                            <ClickOnMeIcon />
                        </div>
                        <div className="absolute left-[57px] top-[92.7px]">
                            <ClickOnMeIcon />
                        </div>
                        <div className="absolute left-[200px] top-[300px]">
                            <ClickOnMeIcon />
                        </div>
                        <div className="absolute left-[57.6px] top-[383px]">
                            <ClickOnMeIcon />
                        </div>
                        <div className="absolute left-[217px] top-[683px]">
                            <ClickOnMeIcon />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
      </section>
    );
  };
  