import React from 'react'
import Image, { StaticImageData } from 'next/image';
import Button from '@/components/button';
import localFont from 'next/font/local'

interface CardProps {
  hasButton: boolean;
  title: string;
  desc: string;
  image: string | StaticImageData;
  icon ?: string | StaticImageData;
  text ?: string;
  extraStyle ?: string;
}

// const hFont = localFont({ src: '../../../public/fonts/Swiss 721 BT.woff' });

const Card: React.FC<CardProps> = ({ hasButton, title, desc, image, icon, text, extraStyle }) => {
  return (
    <div className={`flex w-full p-8 items-center justify-between bg-[#1C1C1C] ${extraStyle ? extraStyle : ""}`}>
      <div className='flex-1'>
        <h1 className={`text-2xl font-bold pb-1`}>{title}</h1>
        <p className='text-[#7E7F7F] pb-3'>{desc}</p>
        {
          hasButton 
            ? <Button text={text ? text : ""} icon={icon ? icon : ""} style={"bg-[#8BC72F] text-[#0A0A0A]"} />
            : <div className='group flex gap-1 cursor-pointer hover:text-[#7E7F7F] group-hover:fill-[#7E7F7F]'>
                <Image src={icon ? icon : ""} alt='' className='group-hover:fill-[#7E7F7F]'/>
                <p className='font-semibold'>{text}</p>
              </div>
        }
      </div>
      <div>
        <Image src={image} alt=''></Image>
      </div>
    </div>
  )
}

export default Card