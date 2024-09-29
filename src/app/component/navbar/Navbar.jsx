'use client'
import React, { useState, useEffect } from 'react';
import { FaPlane, FaHotel, FaRunning, FaMapMarkerAlt, FaBars, FaUser, FaSearch, FaHome, FaHistory } from 'react-icons/fa';
import Image from 'next/image';
import ProfileModal from './ProfileModal';
import { useRouter } from 'next/navigation';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import app from '@/app/firebase';


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(1);
  const [btn, setBtn] = useState(1);
  const [showProfile, setShowProfile] = useState(false);
  const router =  useRouter()
  const auth = getAuth();
  const [user, setUser] = useState(null);
  
  const openProfile = () =>{
    setShowProfile(!showProfile);
  }
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) =>{
      if (user){
        setUser(user);
        console.log('User is unsubscribed', user)
      } else {
        router.push('/dashboard')
    }
  });

  return () => unsubscribe();
  }, [auth, user]);

 
  const login = () =>{
    router.push('/')
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const itemActive = (id) => {
    setActive(id);
  };

  const btnActive = (id) => {
    setBtn(id);
  };

  const Item = [
    { id: 1, label: 'Discover', href: '#' },
    { id: 2, label: 'Destination', href: '#' },
    { id: 3, label: 'Blog', href: '#' },
    { id: 4, label: 'FAQ', href: '#' },
  ];

  const optionUser = [
    { id: 1, label: 'Accommodation', href: '/dashboard', icon: FaHotel },
    { id: 2, label: 'Flight', href: '/flight', icon: FaPlane },
    { id: 3, label: 'Destination', href: '/dashboard', icon: FaMapMarkerAlt },
    { id: 4, label: 'Activity', href: '/dashboard', icon: FaRunning },
  ];

  const optionMobile = [
    { id: 1, label: 'Home', href: '/dashboard', icon: FaHome },
    { id: 2, label: 'Search', href: '/dashboard', icon: FaSearch },
    { id: 3, label: 'Flight', href: '/flight', icon: FaPlane },
    { id: 4, label: 'History', href: '/flight', icon: FaHistory },
    { id: 5, label: 'Profile', href: '/dashboard', icon: FaUser },
  ];

  const handleShow = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="lg:sticky md:sticky sticky top-0 z-20">
      <nav className={` ${isScrolled ? 'shadow-md' : 'shadow-none'} lg:px-12 px-4 lg:py-4 md:px-8 py-4 w-full lg:sticky bg-white top-0`}>
        <div className="flex justify-between items-center">
          <div className="lg:flex hidden items-center gap-8 lg:">
            <div className="">
              <p className="text-xl font-bold bg-gradient-to-r from-[#5D50C6] to-pink-500 bg-clip-text text-transparent">MlancongId</p>
            </div>
            <ul className="lg:flex gap-6 px-6 py-4 backdrop-blur-lg rounded-full bg-white/30 hidden">
              {Item.map((item) => (
                <li key={item.id} onClick={() => itemActive(item.id)}>
                  <a href={item.href} className={` ${active === item.id ? 'font-bold text-black' : 'font-normal'} text-xs text-gray-700`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:hidden block">
            <a href="#"><p className="text-xl font-bold bg-gradient-to-r from-[#5D50C6] to-pink-500 bg-clip-text text-transparent">MlancongId</p></a>
          </div>
          {!user ? (
          <div className="flex gap-2">
            <button onClick={login} className="bg-white text-black text-xs border-2 border-gray-200 font-medium px-6 h-9 rounded-full">Login</button>
            <button className="bg-[#5D50C6] text-white text-xs font-medium px-6 h-9 rounded-full">Register</button>
        </div>  ): (
            <div>
            <div onClick={openProfile} className='flex gap-2 items-center px-2 py-2 hover:bg-[#EEECFF] hover:border rounded-md hover:border-[#5D50C6] group cursor-pointer transition-all ease-in-out duration-300'>
              <div className='border-3 border-pink-300 rounded-full'>
                  <Image src={user.photoURL} alt="User Avatar" width={30} height={30} className='rounded-full' />
              </div>
              <p className='md:flex lg:flex hidden text-sm font-bold text-black group-hover:text-[#5D50C6]'>{user.displayName}</p>
            </div>
            <div className={` ${showProfile ? 'flex' : 'hidden'}`}>
               <ProfileModal />
            </div>
            </div>
          )}
          
        </div>
        <div className="mt-4 lg:flex gap-4 hidden">
          <input type="text" className="w-96 h-9 bg-gray-100 text-black px-4 text-xs rounded-full" placeholder="search key a hotels, flight, event, dll" />
          <ul className="flex gap-4">
            {optionUser.map((i) => (
              <a href={i.href} onClick={() => btnActive(i.id)} key={i.id} className={`px-2 h-9 ${btn === i.id && i.href ? 'bg-[#5D50C6] text-white' : 'bg-gray-100'} text-white text-xs font-medium flex items-center rounded-full gap-2`}>
                <div className={` ${btn === i.id ? 'block' : 'hidden'} px-1 py-1 bg-white rounded-full flex items-center justify-center`}>
                  <i.icon className={`w-4 h-4 ${btn === i.id ? 'text-[#5D50C6]' : 'text-gray-600'} text-black`} />
                </div>
                <span className={`${btn === i.id ? 'text-white' : 'text-gray-400'}`}>{i.label}</span>
              </a>
            ))}
          </ul>
        </div>
      </nav>
      <div className="bg-white bottom-0 fixed lg:hidden">
        <div className="grid grid-cols-5">
          {optionMobile.map((b) => (
            <button onClick={btnActive} key={b.id} className="px-4 py-4 flex flex-col items-center gap-2">
              <b.icon className={`w-4 h-4 ${btn === b.id ? 'text-[#5D50C6]' : 'text-black'}`} />
              <span className={` ${btn === b.id ? 'text-[#5D50C6] font-semibold' : 'text-black'}`}>{b.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
