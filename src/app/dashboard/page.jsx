'use client'

import React, { useState, useRef } from 'react';
import './style.css';
import Image from 'next/image';
import images from '../image';

import Reservation from '../component/card/Reservation';
import Carousel from '../component/card/Tren_card';
import AsianCard from '../component/card/asianCard';
import Rekomendasi_card from '../component/card/Rekomendasi_card';
import Lokal from '../component/card/lokal';
import OptionCard from '../component/card/optionCard';
import Choosme_Card from '../component/card/Choosme_Card';
import Faq from '../component/card/Faq';

export default function Page() {
  const [show, setShow] = useState(false);
  const [showLokal, setShowLokal] = useState(false);
  const sliderRef = useRef(null);
  const sliderRef2 = useRef(null);

  const handleOpen = () => {
    setShow(!show);
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handleNextLokal = () =>{
      if(sliderRef2.current){
        sliderRef2.current.slickNext();
      }
  }
  const handlePrevLokal = () =>{
      if(sliderRef2.current){
        sliderRef2.current.slickPrev();
      }
  }

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  return (
    <div>
      <section className=' bg-white  h-max  px-4 lg:py-0 py-4  relative'>
        <div className='back  lg:py-8 px-8 lg:px-8 rounded-3xl'>
          <div className='flex flex-col items-center'>
            <h1 className='lg:text-8xl text-4xl font-bold lg:pt-0 pt-4 text-white opacity-90'>Explore the <span className=''>vast World</span></h1>
            <p className='text-sm text-white mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>          
          </div>\
          <div className='flex justify-center lg:relative'>
            <div className=''>
              <Image src={images.Ilustrasi} className='lg:w-[500px] w-[400px]  ' alt='ilustrasi' property='human'/>
            </div>
          </div>
          <div className='lg:block hidden lg:px-8'>
            <Reservation />
          </div>
        </div>    
      </section>
      <section className=' bg-white lg:py-8 py-4 lg:px-8 px-4 z-30'>
        <div className=''>
          <div>
            <p className='text-sm mb-2 text-pink-500 font-medium'>CHOOSE NEXT TOP DESTINATION</p>
            <div className='flex justify-between mb-4 items-center'>
            <p className='lg:text-2xl text-xl  text-black  font-semibold'><span>Trending </span>destination</p>
              <div className='lg:flex hidden gap-4'>
                <button onClick={handlePrev} className='w-8 h-8 bg-white rounded-full border border-gray-300 shadow-lg items-center justify-center flex'>
                  <Image src={images.arrow} alt='Previous' />
                </button>
                <button onClick={handleNext} className='w-8 h-8 bg-[#5D50C6] rounded-full items-center justify-center flex'>
                  <Image src={images.arrow1} alt='Next' />
                </button>
              </div>
            </div>
          </div>
          <div className='mlg:t-6  -z-50'>
            <Carousel ref={sliderRef} />
          </div>
          <div className='lg:mt-12 mt-4 lg:justify-start flex justify-between items-center'>
             <button className='text-sm text-white font-semibold w-32 px-4 h-10 bg-[#5D50C6] rounded-md'>See All</button>
             <div className='flex lg:hidden gap-4'>
                <button onClick={handlePrev} className='w-12 h-12 bg-white rounded-lg border border-gray-300 shadow-md items-center justify-center flex'>
                  <Image src={images.arrow} alt='Previous' />
                </button>
                <button onClick={handleNext} className='w-12 h-12 bg-[#5D50C6] rounded-lg items-center justify-center flex'>
                  <Image src={images.arrow1} alt='Next' />
                </button>
              </div>
          </div>
        </div>
      </section>
      <section className=' max-h-max py-8 lg:px-8 px-4 bg-white'>
          <div>
             <div className='lg:flex lg:flex-row flex flex-col gap-2 items-center'>
                <Image src={images.Globe} alt='globe icon' className='lg:w-8 w-4'/>
             <div>
                <p className='lg:text-[24px] text-xl text-center lg:text-left text-[#171616] font-semibold'>Discover for yourself several places in Asia</p>
             </div>
             </div>
             <p className='text-sm text-pink-500 mt-4'>some of the most popular countries in Asia</p>
             <div>
              <AsianCard></AsianCard>
             </div>
          </div>
      </section>
      <section className='bg-[#F8F8F8] lg:py-8 py-4 px-4'>
        <div className='lg:flex justify-between'>
          <h1 className='lg:text-2xl lg:mb-0 mb-4 md:text-2xl text-xl font-bold text-black'>Rekomendasi for You</h1>
          <div className='max-w-lg'>
            <p className='text-sm text-gray-400 '>Cultural festivals celebrate the diversity of defrent, music , dance, community, food and arts</p>
          </div>
        </div>
        <Rekomendasi_card/>     
      </section>
      <section className='lg:px-8  px-4 lg:py-8 py-4  bg-white'>
          <h1 className='lg:text-2xl text-xl text-black font-semibold'>Explore local destinatiol</h1>
          <p className='text-sm text-gray-500 '>let's explore local places in Indonesia</p>
          <div className='relative flex items-center mt-4'>
              <button onClick={handleNextLokal} className='text-xl lg:flex items-center justify-center text-black absolute -right-4 z-10  w-10 h-10 rounded-full bg-white shadow-lg'>
                <Image src={images.Arrow3} alt='Prev' className='w-6 rotate-180' />
              </button>
              <button onClick={handlePrevLokal} className=' text-xl lg:flex items-center justify-center text-black absolute -left-4 z-10  w-10 h-10 rounded-full bg-white shadow-lg'>
                <Image src={images.Arrow3} alt='Next' className='w-6 ' />
              </button>
              <Lokal ref={sliderRef2}/>   
          </div>
      </section>
      <section className='bg-white lg:px-8 px-4 lg:py-8 py-4'>
         <h1 className='lg:text-2xl text-xl text-black font-semibold'>Choose easily here</h1>
         <p className='text-sm mt-2 text-gray-400'>makes it easier for you to search by filtering destinations by category</p>
         <div className='mt-6'>
            <OptionCard/>
         </div>
      </section>
      <section className='lg:py-8 py-4 lg:px-8 px-4 max-h-screen bg-white'>
         <h1 className='text-2xl text-black font-semibold'>Why you coose me ?</h1>
         <p className=' text-gray-400 text-sm mt-2'>Get easy, fast and safe service on the Mlancong website</p>
         <div className='mt-4'>
            <Choosme_Card/>
         </div>
      </section>
      <section>
        <Faq></Faq>
      </section>
      <div>
          <div className={` ${show ? 'flex' : 'hidden'}`}>
            <Reservation />
          </div>
      </div>
    </div>
  );
}
