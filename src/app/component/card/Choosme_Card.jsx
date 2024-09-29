import React from 'react'
import Donation from '../../Image/Donation.svg'
import SafeMony from '../../Image/SafeMoney.svg'
import Website from '../../Image/Website.svg'
import Image from 'next/image'

export default function Choosme_Card() {
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
      <div className='flex items-center gap-4'>
          <div className='p-4 bg-[#EEECFF] border border-[#6D14B3] rounded-md flex items-center justify-center'>
              <Image src={Donation} className='w-12' alt='icon'/>
          </div>
          <div className='flex flex-col gap-2'>
              <h1 className='lg:text-md text-sm font-medium text-black'>Esay Payment</h1>
              <p className='text-xs text-gray-400'>We offer a variety of easy and secure payment methods for your convenience.</p>
          </div>
      </div> 
      <div className='flex items-center gap-4'>
          <div className='p-4 bg-[#EEECFF] border border-[#6D14B3] rounded-md flex items-center justify-center'>
              <Image src={SafeMony} className='w-12' alt='icon'/>
          </div>
          <div className='flex flex-col gap-2'>
              <h1 className='lg:text-md text-sm font-medium text-black'>Esay Transaction</h1>
              <p className='text-xs text-gray-400'>The transaction process on our site is designed to be fast and efficient. Starting from ordering to payment.</p>
          </div>
      </div> 
      <div className='flex items-center gap-4'>
          <div className='p-4 bg-[#EEECFF] border border-[#6D14B3] rounded-md flex items-center justify-center'>
              <Image src={Website} alt='icon'/>
          </div>
          <div className='flex flex-col gap-2'>
              <h1 className='lg:text-md text-sm font-medium text-black'>User Friendly</h1>
              <p className='text-xs text-gray-400'>The web interface is very friendly, making it easier for you to go on holiday</p>
          </div>
      </div> 
    </div>
  )
}
