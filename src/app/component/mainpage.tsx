import Image from "next/image";
import Link from "next/link";

const MainPage = () => {
  return (
    <section className="bg-black text-white py-12 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-orange-400 text-2xl md:text-3xl font-serif mb-2">About us</h2>
          <h3 className="text-3xl md:text-[48px] font-bold mb-4 leading-tight">
            <span className="text-orange-400">We</span> Create the best
            <br />foody product
          </h3>
          <p className="text-gray-300 text-[16px] leading-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna,
            elit augue urna, vitae feugiat pretium donec id elementum. Ultrices
            mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
            consequat.
          </p>

          {/* List Items */}
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-orange-400 text-[16px] leading-[24px] mr-3">✔</span>
              Lacus nisi, et ac dapibus sit eu velit in consequat.
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 text-[16px] leading-[24px] mr-3">✔</span>
              Quisque diam pellentesque bibendum non dui volutpat fringilla
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 text-[16px] leading-[24px] mr-3">✔</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
          </ul>
            <br />
          {/* Button */}
          <Link href="/blog">

          <button className="px-6 py-3 bg-orange-500 text-black font-medium rounded-lg hover:bg-orange-600 transition">
            Read More
          </button>
          </Link>
        </div>

        {/* Right Content */}
        <div className="grid grid-cols-2 gap-4">
          <div className="row-span-2">
            <Image
              src="/images/main1.png" 
              height={200}
              width={200}
              alt="Large food image"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div>
            <Image
              src="/images/main2.png" 
              height={200}
              width={200}
              alt="Small food image 1"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div>
            <Image
              src="/images/main3.png" 
              height={200}
              width={200}
              alt="Small food image 2"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default MainPage;
