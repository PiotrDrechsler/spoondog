'use client';
import {ClickOnMeImg} from './ClickOnMeImg'
import {ClickOnMeTitle} from './ClickOnMeTitle'
import Container from "../Share/Container";
import { ClickOnMeArrow } from './ClickOnMeArrow';
import { ClickOnMeIcon } from './ClickOnMeIcon';
import { useState } from 'react';

export const ClickOnMe = () => {
    const [activeBox, setActiveBox] = useState(null);

    const toggleBox = (index) => {
        setActiveBox(activeBox === index ? null : index);
    }
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
                            <div className="absolute top-[50px] left-[100px] bg-yellow p-4 shadow-lg rounded-md">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, minus.</p>
                            </div>
                        )}
                        {activeBox === 2 && (
                            <div className="absolute top-[120px] left-[50px] bg-yellow p-4 shadow-lg rounded-md">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dignissimos?</p>
                            </div>
                        )}
                        {activeBox === 3 && (
                            <div className="absolute top-[320px] left-[200px] bg-yellow p-4 shadow-lg rounded-md">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, temporibus.</p>
                            </div>
                        )}
                        {activeBox === 4 && (
                            <div className="absolute top-[400px] left-[60px] bg-yellow p-4 shadow-lg rounded-md">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, a?</p>
                            </div>
                        )}
                        {activeBox === 5 && (
                            <div className="absolute top-[700px] left-[200px] bg-yellow p-4 shadow-lg rounded-md">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, natus.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Container>
      </section>
    );
  };
  