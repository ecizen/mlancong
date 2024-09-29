'use client'
import React,{useEffect, useState} from 'react'
import { FaUser, FaSignOutAlt, FaTicketAlt } from 'react-icons/fa'
import { useRouter } from 'next/navigation';
export default function ProfileModal() {
    const router =  useRouter()
    

    
  // Show the modal when the user clicks on the profile icon
  return (
    <div className=' px-4 py-4  bg-white absolute lg:right-20 md:right-20 right-10 top-20 rounded-md shadow-md'>
        <div className='flex flex-col gap-4'>
            <button className='flex gap-4 hover:bg-black/15 px-2 py-2 rounded-md items-center transition-all ease-in-out duration-300'>
                <FaUser className='w-4 h-4 text-black' />
                <p className='text-sm text-black font-medium'>Manage Account</p>
            </button>
            <button className='flex gap-4 hover:bg-black/15 px-2 py-2 rounded-md items-center transition-all ease-in-out duration-300'>
                <FaTicketAlt className='w-4 h-4 text-black' />
                <p className='text-sm text-black font-medium'>Go Pro</p>
            </button>
            <button  className='flex hover:bg-black/15 px-2 py-2 gap-4 items-center transition-all ease-in-out duration-300'>
                <FaSignOutAlt className='w-4 h-4 text-black' />
                <p className='text-sm text-black font-medium'>Sign Out</p>
            </button>
        </div>
    </div>
  )
}
