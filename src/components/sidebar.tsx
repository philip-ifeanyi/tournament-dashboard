'use client'
import React, { useState } from 'react';
import { sideNav } from '@/data/data';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      <aside className={`bg-[#121212] text-[#7E7F7F] w-72 h-[92dvh] min-h-full ${isOpen ? 'block' : 'hidden'} md:block`}>
        <div className="p-4 py-8 flex flex-col justify-between h-[100%]">
          <nav className="mt-4">
            <ul className='flex flex-col gap-4'>
              {
                sideNav.map((data, index) => {
                  return (
                    <Link href={data.path} className="flex items-center gap-2 hover:bg-gray-700 px-6 py-4" key={index}>
                      <Image src={data.icon} alt='image'/>
                      <p>{data.name}</p>
                    </Link>
                  )
                })
              }
            </ul>
          </nav>

          <div className='bg-[#5F0A07] p-4 text-[#E5E4E4]'>
            <p>LOG-OUT</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
