import React from 'react';
import Link from 'next/link';
import { title } from 'process';
interface propstype{
    title: string;
    subtitle: string;
}


const Common:React.FC<propstype> = ({ title,subtitle}:propstype) => {
  return (
    <div className='md:max-w-[1920px] h-[410px] w-full' style={{ backgroundImage: "url('/images/bg.png')" }}>
        <div className='w-full h-[104px] top-{198} text-center left-{850} '>
            <h1 className='font-bold text-[48px] text-white w-full md:pt-[8%] pt-[18%]'>{title}</h1>
            <div className='flex w-full text-white gap-2 md:pl-[47%] pl-[35%]'>
                <Link href="/"><span className='text-white'>Home</span></Link>&gt;<span className='text-[#FF9F0D]'>{subtitle}</span>
            </div>
        </div>
    </div>
  )
}

export default Common;