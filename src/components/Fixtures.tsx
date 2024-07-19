import Image from 'next/image'
import React from 'react'
import Fixture from '../../public/Assets/Fixture viewer.png'


const Fixtures = () => {
  return (
   <div className='w-full mt-8'>
    <Image src={Fixture} alt='' className='w-full' quality={100} />
   </div>
  )
}

export default Fixtures