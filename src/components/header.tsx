import React from 'react';
import Logo from "../../public/Logo.svg"
import Image from 'next/image';
import { CiSearch } from "react-icons/ci";
import { FaCoins } from "react-icons/fa";
import { TbBellRinging2Filled } from "react-icons/tb";
import { IoChevronDown } from "react-icons/io5";
import { HiUser } from "react-icons/hi2";


const Header = () => {
  return (
    <header className="bg-[#121212] text-[#E5E4E4] flex items-center justify-between p-4 px-16 border-b border-[#242424]">
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" className="w-[98px] mx-auto" />
      </div>
      <div className="flex items-center p-2 bg-[#1C1C1C] w-2/5">
        <CiSearch className="text-gray-500 mr-2 font-bold" size={24} />
        <input
          type="text"
          placeholder="Search tournament, player name or player tag"
          className="w-full p-2 rounded bg-transparent text-gray-500 placeholder-gray-500 focus:outline-none focus:none focus:ring-none"
        />
      </div>
      <div className="flex items-center">
        <button className="mr-4 p-2 bg-[#1C1C1C] rounded-full">
          <TbBellRinging2Filled className='text-xl text-[#DBD9D9]'/>
        </button>
        <div className="flex items-center gap-2">
          <FaCoins className='text-[#FFB800]'/>
          <span className="mr-2">20,000</span>
        </div>
        <div className="ml-4 flex items-center">
          <div className='p-2 bg-[#1C1C1C] rounded-full'>
            <HiUser className='text-2xl'/>
          </div>
          <div className='flex flex-col gap-1 items-start justify-center'>
            <span className="ml-2">Akinola Olalekan</span>
            <div className="ml-2 bg-[#40610F] text-xs px-2 py-1 flex gap-2 items-center">
              <p>Online</p>
              <IoChevronDown />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
