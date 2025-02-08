import React from 'react'
import Common from '../component/common'
import Image from 'next/image';
interface Chef {
    id: number;
    img: string;
    name: string;
    title: string;
}

const page = () => {
    const chefData: Chef[] = [
        {
            id: 1,
            img: "/images/chef1.png",
            name: "Tahmina Rumi",
            title: "Chef"
        },
        {
            id: 2,
            img: "/images/chef2.png",
            name: "Jorina Begum",
            title: "Chef"
        },
        {
            id: 3,
            img: "/images/chef3.png",
            name: "M.Mohammad",
            title: "Chef"
        },
        {
            id: 4,
            img: "/images/chef4.png",
            name: "Munna Kathy",
            title: "Chef"
        },
        {
            id: 5,
            img: "/images/chef5.png",
            name: "Tahmina Rumi",
            title: "Chef"
        },{
            id: 6,
            img: "/images/chef6.png",
            name: "Bisnu devgon",
            title: "Chef"
        },
        {
            id: 7,
            img: "/images/chef7.png",
            name: "Motin Molladsf",
            title: "Chef"
        },
        {
            id: 8,
            img: "/images/chef8.png",
            name: "William Rumi",
            title: "Chef"
        },
        {
            id: 9,
            img: "/images/chef9.png",
            name: "Kets william roy",
            title: "Chef"
        },
        {
            id: 10,
            img: "/images/chef1.png",
            name: "Mahmud kholil",
            title: "Chef"
        },
        {
            id: 11,
            img: "/images/chef11.png",
            name: "Ataur Rahman",
            title: "Chef"
        },
        {
            id: 12,
            img: "/images/chef12.png",
            name: "Monalisa holly",
            title: "Chef"
        }
    ]
  return (
    <div className='md:max-w-[1920px] w-full'>
        <Common title='Our Chef' subtitle='Chef' />
        <div className='max-w-[1320px] px-8'>
            <div className='grid gap-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-center items-center my-12'>
                {chefData.map((item, index) => (
                    <div key={index} className='w-full max-w-[312px] mx-auto p-4 bg-white shadow-lg rounded-lg'>
                        <Image src={item.img} alt={item.title} width={312} height={380} className='w-full mb-4 rounded-lg object cover'/>
                        <h2 className='text-center font-bold text-lg mb-2'>{item.name}</h2>
                        <p className='text-center text-sm text-gray-600'>{item.title}</p>
                    </div>

                ))}
            </div> 
        </div>
    </div>
  )
}

export default page