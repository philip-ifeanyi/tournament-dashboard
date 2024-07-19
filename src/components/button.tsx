import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface ButtonProps {
  icon: string | StaticImageData;
  text: string;
  style?: string;
}

const Button: React.FC<ButtonProps> = ({ icon, text, style }) => {
  return (
    <button className={`${style} flex p-4 gap-2 items-center justify-center`}>
      <Image src={icon} alt="" width={30}/>
      <p className='text-lg font-semibold'>{text}</p>
    </button>
  )
}

export default Button