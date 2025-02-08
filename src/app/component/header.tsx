import React, { useState } from 'react';
import Link from 'next/link';
import { IoSearchOutline } from 'react-icons/io5';
import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { HiMenu } from 'react-icons/hi';

const Header = () => {
  return (
    <div className='w-full bg-black px-6 py-4 md:px-10 lg:px-20 flex items-center justify-between'>
      {/* Logo */}
      <div className='flex items-center'>
        <h1 className='font-bold text-2xl text-white'>Food</h1>
        <span className='font-bold text-2xl text-[#FF9F0D]'>tuck</span>
      </div>
      
      {/* Navigation for Desktop */}
      <ul className='hidden md:flex gap-6'>
        {['Home', 'Menu', 'Blog', 'Chef', 'About', 'Shop', 'Contact'].map((item) => (
          <li key={item} className='text-white font-semibold hover:text-[#FF9F0D] transition'>
            <Link href={`/${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
      </ul>
      
      {/* Icons */}
      <div className='hidden md:flex gap-4'>
        <IoSearchOutline size={24} className='text-white cursor-pointer'/>
        <Link href={"/signup"}><AiOutlineUser size={24} className='text-white cursor-pointer'/></Link>
        <HiOutlineShoppingBag size={24} className='text-white cursor-pointer'/>
      </div>
      
      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger className='md:hidden'>
          <HiMenu size={28} className='text-white'/>
        </SheetTrigger>
        <SheetContent side='left' className='bg-black text-white w-64'>
          <div className='flex flex-col gap-4 mt-6'>
            {['Home', 'Menu', 'Blog', 'Pages', 'About', 'Shop', 'Contact'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className='text-white text-lg font-semibold hover:text-[#FF9F0D] transition'>
                {item}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;