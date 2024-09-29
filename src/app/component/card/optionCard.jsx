import React, { useState } from 'react';
import { FaCampground, FaUmbrellaBeach, FaAnchor, FaHistory, FaLeaf, FaCity, } from 'react-icons/fa';
import Slider from 'react-slick';
import { items , categories } from '@/app/data/data';
import Image from 'next/image';


export default function OptionCard() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selected, setActive] = useState(1);

  const handleCategoryChange = (category, id) => {
    setSelectedCategory(category);
    setActive(id)
    
  };

  

  const Filter = [
    {
        id: 1,
        name: 'All',
        category: 'All'
    },
    {
        id: 2,
        name: 'Outdors',
        icon : <FaCampground className='w-4 h-4 '/>,
        category : 'Outdors',
    },
    {
        id: 3,
        name: 'Beach',
        icon : <FaUmbrellaBeach className='w-4 h-4 '/>,
        category : 'Beach',
    },
    {
        id: 4,
        name: 'Cultural',
        icon : <FaHistory className='w-4 h-4 '/>,
        category : 'Cultural',
    },
    {
        id: 5,
        name: 'Andrenalin',
        icon : <FaAnchor className='w-4 h-4 '/>,
        category : 'Andrenalin',
    },
    {
        id: 6,
        name: 'Natural',
        icon : <FaLeaf className='w-4 h-4 '/>,
        category : 'Natural',
    },
    {
        id: 7,
        name: 'City tours',
        icon : <FaCity className='w-4 h-4 '/>,
        category : 'City tours',
    }
  ]
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,    
    responsive: [
        {
          breakpoint: 768, // max-width for mobile and small screens
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false
          },
        }
      ]
  };

  const filteredItems = selectedCategory === 'All'
    ? items
    : items.filter(item => item.category === selectedCategory);

  return (
    <div>
      <div className='flex overflow-auto gap-4 mb-4'>
        {Filter.map((fltr)=>(
        <button key={fltr.id} onClick={() => handleCategoryChange(fltr.category, fltr.id)} className={` ${selected === fltr.id ? ' bg-[#EEECFF] border border-[#6D14B3] rounded-full': 'bg-white'} px-4 h-8  rounded-full flex items-center gap-2`}>
          <i className={` ${selected === fltr.id ? 'text-[#6D14B3]' : 'text-gray-400' }`}>{fltr.icon}</i>
          <p className={` ${selected === fltr.id ? 'text-[#6D14B3]': 'text-gray-400'} text-xs`}>{fltr.name}</p>
        </button>
           ))}
      </div>
      <div>
      <Slider {...settings} className='w-full'>
        {filteredItems.map(item => (
          <div key={item.id} className='p-2 cursor-pointer'>
            <Image src={item.gambar} alt={item.name} property='tes'  className='rounded-xl'/>
            <p key={item.id} className=' mt-4 text-sm text-black font-bold'>{item.name}</p>
          </div>
        ))}
        </Slider>
      </div>
    </div>
  );
}

