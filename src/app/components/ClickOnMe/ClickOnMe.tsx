'use client';
import {ClickOnMeImg} from './ClickOnMeImg'
import {ClickOnMeTitle} from './ClickOnMeTitle'
import Container from "../Share/Container";
import { ClickOnMeArrow } from './ClickOnMeArrow';
import { ClickOnMeIcon } from './ClickOnMeIcon';
import { useState } from 'react';
import { activeboxes } from './ClickOnMeActiveBox';


export const ClickOnMe: React.FC = () => {
    const [activeBox, setActiveBox] = useState<number | null>(null);
  
    const toggleBox = (index: number) => {
      setActiveBox(activeBox === index ? null : index);
    };

    return (
      <section id="clickOnMe" className='hidden desktop:block py-8 px-20' aria-labelledby="clickOnMeTitle">
        <Container>
            <div className='relative'>
                <div>
                <ClickOnMeTitle id="clickOnMeTitle" text="Kliknij na mnie"/>
                </div>
                <div className="absolute left-[480px] top-[56px]">
                <ClickOnMeArrow />
                </div>
                <div className='flex justify-center mb-4'>
                    <div className="relative w-[360px] h-[765px]">
                    <ClickOnMeImg />
                        {activeboxes.map((activebox) => (
                            <div
                            key={activebox.id}
                            className={`absolute cursor-pointer`}
                            style={{ left: activebox.position.left, top: activebox.position.top }}
                            onClick={() => toggleBox(activebox.id)}
                            role="button"
                            aria-label={`Kliknij na element ${activebox.title}`}
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    toggleBox(activebox.id);
                                }
                            }}
                            aria-expanded={activeBox === activebox.id}
                            >
                            <ClickOnMeIcon />
                            {activeBox === activebox.id && (
                                <>
                                <div className={`animate-active-boxes`}>
                                <div className={`absolute w-[250px] h-[2px] bg-greyLines`} style={{ top: activebox.positionLine.top, left: activebox.positionLine.left }} />
                                <div className={`absolute w-[350px] bg-cream p-4 shadow-clickonmeshadow rounded-radius24`} style={{ top: activebox.positionInfoBox.top, left: activebox.positionInfoBox.left }}>
                                    <div className="flex items-center">
                                    <div className="w-[2px] h-[40px] bg-yellow mr-4" />
                                    <h4 className="text-20 ml-2 p-2 w-[300px]">{activebox.title}</h4>
                                    </div>
                                    <p className="text-16 p-2">{activebox.description}</p>
                                </div>
                                </div>
                                </>
                            )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
      </section>
    );
  };
  