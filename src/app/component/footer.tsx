import React from 'react'
import Image from 'next/image'

interface Data {
  id: number;
  img: string;
  title: string;
  date: string;
}

const Footer = () => {
  const data: Data[] = [
    {
      id: 1,
      img: "/images/1.png",
      title: "Is fast food good for your body?",
      date: "February 28, 2022"
    },
    {
      id: 2,
      img: "/images/1.png",
      title: "Change your food habit with organic food",
      date: "February 28, 2022"
    },
    {
      id: 3,
      img: "/images/1.png",
      title: "Do you like fast food for your life?",
      date: "February 28, 2022"
    }
  ];

  return (
    <div className="w-full bg-black text-white py-10">
      
      {/* Top Section: Newsletter Subscription */}
      <div className="max-w-[1169px] mx-auto flex flex-col md:flex-row justify-between items-center border-b-2 border-[#FF9F0D] px-6 pb-6">
        <div className="md:w-1/2 space-y-3 text-center md:text-left">
          <h2 className="text-2xl font-bold">
            <span className="text-[#FF9F0D]">St</span>ill You Need Our Support?
          </h2>
          <p className="text-gray-300 text-sm">Don’t wait, make a smart & logical quote here. It’s pretty easy.</p>
        </div>
        
        <div className="flex w-full md:w-auto mt-4 md:mt-0">
          <input 
            type="email" 
            placeholder="Enter Your Email"
            className="w-full md:w-[250px] p-3 bg-[#FF9F0D] text-white placeholder-white rounded-l-md"
          />
          <button className="w-[150px] p-3 bg-white text-[#FF9F0D] font-bold rounded-r-md">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Lower Section: Footer Content */}
      <div className="max-w-[1220px] mx-auto mt-12 grid grid-cols-1 md:grid-cols-4 gap-10 px-6">

        {/* About Us */}
        <div className="space-y-6 w-[300px]">
          <h2 className="text-lg font-bold">About Us</h2>
          <p className="text-sm text-white">
            Corporate clients and leisure travelers have been relying on us for professional chauffeured car services in major cities worldwide.
          </p>
          <div className="flex items-center gap-3">
            <button className="p-4 bg-[#FF9F0D] rounded-md">
              <Image src="/images/ClockClockwise.png" alt="Clock Icon" width={40} height={40} />
            </button>
            <div>
              <p className="font-bold">Opening Hours</p>
              <p className="text-sm text-white">Mon - Sat (8:00 AM - 6:00 PM) <br /> Sunday - Closed</p>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div className='pl-11'>
          <h2 className="text-lg font-bold mb-4">Useful Links</h2>
          <ul className="space-y-2 text-white">
            <li>About</li>
            <li>News</li>
            <li>Partners</li>
            <li>Team</li>
            <li>Menu</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Help?</h2>
          <ul className="space-y-2 text-white">
            <li>FAQ</li>
            <li>Terms & Conditions</li>
            <li>Reporting</li>
            <li>Documentation</li>
            <li>Support Policy</li>
            <li>Privacy</li>
          </ul>
        </div>

        {/* Recent Posts */}
        <div>
          <h2 className="text-lg font-bold mb-4">Recent Posts</h2>
          {data.map((item) => (
            <div className="flex items-center gap-4 mb-4" key={item.id}>
              <Image src={item.img} alt={item.title} width={80} height={80} className="rounded-md" />
              <div>
                <h3 className="text-sm font-medium">{item.title}</h3>
                <p className="text-xs text-gray-400">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>

      {/* Footer Bottom */}
      {/* <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 py-4">
        &copy; {new Date().getFullYear()} YourCompany. All Rights Reserved.
      </div>
       */}
    </div>
  );
};

export default Footer;
