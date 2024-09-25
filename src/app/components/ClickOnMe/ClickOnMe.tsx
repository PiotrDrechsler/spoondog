'use client';
import {ClickOnMeImg} from './ClickOnMeImg'
import {ClickOnMeTitle} from './ClickOnMeTitle'
import Container from "../Share/Container";
import { ClickOnMeArrow } from './ClickOnMeArrow';
import { ClickOnMeIcon } from './ClickOnMeIcon';
import { useState } from 'react';


export const ClickOnMe: React.FC = () => {
    const [activeBox, setActiveBox] = useState<number | null>(null);
  
    const toggleBox = (index: number) => {
      setActiveBox(activeBox === index ? null : index);
    };

    return (
      <section id="clickOnMe" className='hidden xl:block'>
        <Container>
            <div className='relative'>
                <div className='text-dark text-center font-dm-sans text-[32px] font-medium leading-[48px] tracking-[-0.64px]'>
                <ClickOnMeTitle />
                </div>
                <div className="absolute left-[480px] top-[56px]">
                <ClickOnMeArrow />
                </div>
                <div className='flex justify-center mb-4'>
                    <div className="relative w-[360px] h-[765px]">
                    <ClickOnMeImg />
                        <div className="absolute left-[217px] top-[36.8px] cursor-pointer" onClick={()=>toggleBox(1)}>
                            <ClickOnMeIcon />
                        </div>
                        <div className="absolute left-[57px] top-[92.7px] cursor-pointer" onClick={()=>toggleBox(2)}>
                            <ClickOnMeIcon />
                        </div>
                        <div className="absolute left-[200px] top-[300px] cursor-pointer" onClick={()=>toggleBox(3)}>
                            <ClickOnMeIcon />
                        </div>
                        <div className="absolute left-[57.6px] top-[383px] cursor-pointer" onClick={()=>toggleBox(4)}>
                            <ClickOnMeIcon />
                        </div>
                        <div className="absolute left-[217px] top-[683px] cursor-pointer"onClick={()=>toggleBox(5)}>
                            <ClickOnMeIcon />
                        </div>
                        {activeBox === 1 && (
                        <>
                        <div className="absolute top-[46.8px] left-[250px] w-[150px] h-[2px] bg-greyLines" /> 
                        <div className="absolute top-[20px] left-[367px] w-[300px] bg-cream p-4 shadow-clickonmeshadow rounded-md">
                            <>
                                <div className="w-[2px] h-[40px] bg-yellow mr-4" > 
                                <h4 className="text-20 ml-2 p-2 w-[300px]">Usuwanie kamienia</h4>
                                </div>
                            </>
                            <p className="text-16 p-2">Oferujemy usługę usuwania kamienia nazębnego nowoczesną metodą Emmy PET, niewymagającej narkozy.</p>
                        </div>
                        </>
                        )}
                        {activeBox === 2 && (
                            <>
                                <div className="absolute top-[102.7px] left-[90px] w-[150px] h-[2px] bg-greyLines" /> 
                                <div className="absolute top-[60px] left-[207px] w-[300px] bg-cream p-4 shadow-clickonmeshadow rounded-md">
                                    <>
                                        <div className="w-[2px] h-[40px] bg-yellow mr-4" > 
                                        <h4 className="text-20 ml-2 p-2 w-[300px]">Czyszczenie uszu</h4>
                                        </div>
                                    </>
                                <p className="text-16 p-2">To proces usuwania nagromadzonego wosku, brudu i zanieczyszczeń z przewodów słuchowych i małżowin usznych, a także na usuwaniu włosów wewnątrz ucha.</p>
                                </div>
                            </>
                        )}
                        {activeBox === 3 && (
                            <>
                                <div className="absolute top-[310px] left-[230px] w-[150px] h-[2px] bg-greyLines" /> 
                                <div className="absolute top-[280px] left-[350px] w-[300px] bg-cream p-4 shadow-clickonmeshadow rounded-md">
                                <>
                                        <div className="w-[2px] h-[40px] bg-yellow mr-4" > 
                                        <h4 className="text-20 ml-2 p-2 w-[300px]">Kąpiel</h4>
                                        </div>
                                </>
                                <p className="text-16 p-2">Oczyszczanie sierści i skóry z brudu, zanieczyszczeń, pasożytów i martwego naskórka, co pomaga utrzymać ich zdrowie, komfort i przyjemny zapach.</p>
                                </div>
                            </>
                        )}
                        {activeBox === 4 && (
                            <>
                                <div className="absolute top-[393px] left-[90px] w-[150px] h-[2px] bg-greyLines" /> 
                                <div className="absolute top-[360px] left-[207.6px] w-[300px] bg-cream p-4 shadow-clickonmeshadow rounded-md">
                                <>
                                    <div className="w-[2px] h-[40px] bg-yellow mr-4" > 
                                    <h4 className="text-20 ml-2 p-2 w-[300px]">Usługi fryzjerskie</h4>
                                    </div>
                                </>
                                <p className="text-16 p-2">Czesanie, rozczesywanie, strzyżenie i trymowanie to nasze zabiegi podstawowe, wykonywane w ramach dbania o zdrowie, komfort i dobre samopoczucie Twojego czworonoga.</p>
                                </div>
                            </>
                        )}
                        {activeBox === 5 && (
                            <>
                                <div className="absolute top-[693px] left-[250px] w-[150px] h-[2px] bg-greyLines" /> 
                                <div className="absolute top-[660px] left-[367px] w-[300px] bg-cream p-4 shadow-clickonmeshadow rounded-md">
                                <>
                                    <div className="w-[2px] h-[40px] bg-yellow mr-4" > 
                                    <h4 className="text-20 ml-2 p-2 w-[300px]">Przycięcie pazurków</h4>
                                    </div>
                                </>
                                <p className="text-16 p-2">Polega na usuwaniu nadmiaru ich zrogowaciałej części, co zapobiega dyskomfortowi, bólom i problemom z poruszaniem się, a także chroni meble i podłogi przed zarysowaniami.</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Container>
      </section>
    );
  };
  