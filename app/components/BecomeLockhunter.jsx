import Image from 'next/image'
import React from 'react'

const BecomeLockhunter = () => {
  const columns = [
    {
      heading: 'Rent',
      img:"/images/rent-icon.svg",
      description:
        'Start small by renting a table or space in a virtual casino city. Manage it, attract players, and earn from the active metaverse economy.'
    },
    {
      heading: 'Buy',
      img:"/images/buy-icon.svg",
      description:
        'Take full ownership of a casino property. Design your space, create unique games, and build a casino empire that draws high-rollers from across the metaverse.'
    },
    {
      heading: 'Lease',
      img:"/images/lease-icon.svg",
      description:
        'Gain long-term control with leasing, giving you the fexibility to run your casino and shape it into a popular gaming destination.'
    }
  ]

  return (
    <div className='become-lockhunter-bg '>
      <div className='container mx-auto px-4 py-8 '>
        <h2 className='text-center mb-8 text-white relative'>
          <span className='flex justify-center'> Become a </span>
          <span className='tex-2xl md:text-[200px] text-yellow-custom -mt-20 flex justify-center'>LuckHunter</span>
          <span className='flex justify-center lg:absolute w-full md:mt-[-130px]'>
            to Own a Casino
          </span>
        </h2>
        <div className='flex items-end h-[399px] lg:h-[1100px] justify-between'>
         
          {columns.map((column, index) => (
            <div
              key={index}
              className='text-left lg:w-[450px] lg:h-[360px] relative own-casino-itemn-bg p-[60px]'
            >
              <Image src={column.img} width={220} height={220} alt={column.heading} className='absolute right-5 -mt-24'/>
              <h4 className=' font-semibold uppercase border-gray-300 pb-3 mb-4 border-b text-white'>
                {column.heading}
              </h4>
              <p className='text-white text-base'>{column.description}</p>
            </div>
          ))}
         
        </div>
      </div>
    </div>
  )
}

export default BecomeLockhunter
