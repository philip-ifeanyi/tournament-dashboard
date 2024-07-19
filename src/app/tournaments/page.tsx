// import React from 'react'
import Button from "@/components/button"
import { cardData, listings } from "@/data/data"
import { FaFilter } from "react-icons/fa"
import { IoChevronDown } from "react-icons/io5"
import { TbArrowsSort } from "react-icons/tb"
import Card from "./card"
import Image from "next/image"
import Trophy from "../../../public/Assets/Trophy - Icon.svg"
import Link from 'next/link'

const Tournaments = () => {

  return (
    <>
      <section className="grid gap-5 grid-cols-2">
        {
          cardData.map((info, index) => {
            return <Card 
              key={index}
              title={info.title}
              desc={info.desc}
              image={info.image}
              icon={info.icon}
              text={info.text}
              hasButton={info.hasButton}
              extraStyle={info.style}
            />
          })
        }
      </section>
      <section className="py-7">
        <header className="flex items-center justify-between pb-5">
          <h2 className="text-2xl">Tournaments</h2>
          <div className="text-[#DBD9D9] flex gap-5">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#1C1C1C]">
              <TbArrowsSort />
              <p>Sort by</p>
              <IoChevronDown className="text-[#7E7F7F]" />
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#1C1C1C]">
              <FaFilter />
              <p>Filter</p>
              <IoChevronDown className="text-[#7E7F7F]"  /></div>
          </div>
        </header>
        <div className="grid grid-cols-3 gap-8 text-[#7E7F7F]">
          {
            listings.map((listing, id) => {
              return (
                <div key={id} className="bg-[#1C1C1C] group">
                  <div className="w-full">
                    <Image src={listing.image} quality={100} alt="" className="object-cover"/>
                  </div>
                  <div className="p-3">
                    <p className="text-2xl">{listing.title}</p>
                    <div className="grid grid-cols-2 gap-y-3 my-3">
                      <div className="flex gap-1">
                        <Image src={listing.calendar} alt=""/>
                        <p>{listing.date}</p>
                      </div>
                      <div className="flex gap-1">
                        <Image src={listing.calendar} alt=""/>
                        <p>{listing.mode}</p>
                      </div>
                      <div className="flex gap-1">
                        <Image src={listing.calendar} alt=""/>
                        <p>{listing.vs}</p>
                      </div>
                      <div className="flex gap-1">
                        <Image src={listing.calendar} alt=""/>
                        <p>{listing.time}</p>
                      </div>
                    </div>
                    <div className="p-2 rounded-3xl flex gap-1 bg-[#242424] w-fit items-center">
                      <Image src={Trophy} alt=""/>
                      <p>{listing.prize}</p>
                    </div>
                    <div className="flex flex-col gap-4 my-4">
                      {
                        listing.btns.map((item, idx) => {
                          return (
                            <Link href={`/tournaments/${id + 1}`} key={idx} className='w-full'>
                              <Button icon={item.icon} text={item.text} style={item.style} />
                            </Link>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Tournaments