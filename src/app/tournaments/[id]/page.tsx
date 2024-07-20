"use client"

import Image from 'next/image'
import { useRouter, useSearchParams } from "next/navigation";
import { tabs } from '@/data/data';
import React, { useCallback } from 'react'
import { BiChevronLeft } from 'react-icons/bi'
import Banner from '../../../../public/Assets/gameImage.png'
import Trophy from '../../../../public/Assets/Trophy-Gold.svg'
import Calendar from '../../../../public/Assets/Calendar.svg'
import GamePad from '../../../../public/Assets/Gamepad-dark.svg'
import Button from '@/components/button'
import Fixtures from '@/components/Fixtures';
import Leaderboards from '@/components/Leaderboards';

const TournamentDetails = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const createQueryString = useCallback((name: string, value:string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);
    return params.toString();
  }, [searchParams]);

  const handleUpdate = (param: string) => {
    router.push(`?${createQueryString('tab', param)}`); // Update the URL
  };

  return (
    <main>
      <section>
        <header className='flex items-center gap-1 font-semibold group group-hover:text-[#7E7F7F] cursor-pointer'>
          <BiChevronLeft className='text-2xl group-hover:text-[#7E7F7F]'/>
          <p className='group-hover:text-[#7E7F7F]'>Back</p>
        </header>
        <div className='w-full'>
          <Image src={Banner} alt='' className='w-full my-5' quality={100} />
          <div>
            <p className='text-2xl font-bold'>Call of Duty</p>
            <div className='flex items-center gap-1 py-2 px-3 bg-[#1C1C1C] w-fit rounded-3xl my-4 text-[#7E7F7F]'>
              <Image src={Trophy} alt='' width={30} />
              <p>₦10,000</p>
            </div>
            <div className='text-[#7E7F7F] font-sans'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
            <div className='flex gap-6 py-5 text-[#7E7F7F]'>
              <div className='flex gap-1 items-center'>
                <Image src={Calendar} alt='' />
                <p>10 Feb 2023</p>
              </div>
              <div className='flex gap-1 items-center'>
                <Image src={Calendar} alt='' />
                <p>Free-to-play</p>
              </div>
              <div className='flex gap-1 items-center'>
                <Image src={Calendar} alt='' />
                <p>4v4</p>
              </div>
              <div className='flex gap-1 items-center'>
                <Image src={Calendar} alt='' />
                <p>10/48</p>
              </div>
            </div>
            <Button icon={GamePad} text='Join tournament' style='bg-[#8BC72F] text-[#0A0A0A]' />
          </div>
        </div>
      </section>
      <section className="mt-8">
        <header>
          <h2 className='text-2xl font-bold my-4'>Tournament Details</h2>
          <div className='flex text-[#7E7F7F] mb-4'>
            {
              tabs.map(tab => {
                return (
                  <p 
                    key={tab.key} 
                    className={`px-3 cursor-pointer py-2 ${searchParams.get('tab') === tab.key ? "bg-[#3B3B3B] text-white" : ""}`} 
                    onClick={() => handleUpdate(tab.key)}
                  >
                    {tab.name}
                  </p>
                )
              })
            }
          </div>
        </header>
        <div>
          { (searchParams.get('tab') === 'Leaderboards' || searchParams.get('tab') === null) && <Leaderboards /> }
          { searchParams.get('tab') === 'Fixtures' && <Fixtures /> }
        </div>
      </section>
    </main>
  )
}

export default TournamentDetails