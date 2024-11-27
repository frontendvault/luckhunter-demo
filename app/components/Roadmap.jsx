import Image from 'next/image'
import React from 'react'
// import { CheckIcon } from "@heroicons/react/solid"; // Optional for checkmark icons

const Roadmap = () => {
  const columns = [
    {
      heading: 'PHASE 1',
      subheading: 'Q3 2024',
      items: [
        'Nulla suscipit dictum erat',
        'Vestibulum augue justo ',
        'Duis eget sagittis nisi',
        'Duis eget sagittis nisi',
        'Donec ullamcorper gravida',
        'Nunc eu leo lacinia'
      ]
    },
    {
      heading: 'PHASE 2',
      subheading: 'Q4 2024',
      items: [
        'Nulla suscipit dictum erat',
        'Vestibulum augue justo ',
        'Duis eget sagittis nisi',
        'Duis eget sagittis nisi',
        'Donec ullamcorper gravida',
        'Nunc eu leo lacinia'
      ]
    },
    {
      heading: 'PHASE 3',
      subheading: 'Q4 2024',
      items: [
        'Nulla suscipit dictum erat',
        'Vestibulum augue justo ',
        'Duis eget sagittis nisi',
        'Duis eget sagittis nisi',
        'Donec ullamcorper gravida',
        'Nunc eu leo lacinia'
      ]
    },
    {
      heading: 'PHASE4',
      subheading: 'Q4 2024',
      items: [
        'Nulla suscipit dictum erat',
        'Vestibulum augue justo ',
        'Duis eget sagittis nisi',
        'Duis eget sagittis nisi',
        'Donec ullamcorper gravida',
        'Nunc eu leo lacinia'
      ]
    }
  ]

  return (
    <div className='roadmap-bg py-10'>
      <h2 className='-mt-[150px]'>
        <Image
          src={'/images/roadmap-heading.svg'}
          height={100}
          width={1920}
          alt=''
        />
      </h2>

      <div className='container mx-auto px-4 py-8'>
      <p className='text-center text-white py-10'>This is the offcial LUCKHUNTER Casino roadmap</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {columns.map((column, index) => (
            <div key={index} className='roadmap-item-bg p-6 md:min-h-[470px]'>
              <h3 className='text-2xl font-bold  mb-2 text-white text-center'>
                {column.heading}
              </h3>

              <p className='font-bold mb-4 text-2xl text-yellow-custom text-center mt-10'>
                {column.subheading}
              </p>
              <ul className='space-y-2'>
                {column.items.map((item, idx) => (
                  <li key={idx} className='flex items-center text-white pb-2'>
                    <Image
                      src={'/images/listing-check.png'}
                      width={20}
                      height={20}
                    />
                    <span className='ml-3'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='text-center py-10'>
          <button className='big-button py-3 px-10 mt-8 h-[100px] w-[425px] text-white'>
            BUY NOW : YOUR CASINO YOUR RULES
          </button>{' '}
        </div>
      </div>
    </div>
  )
}

export default Roadmap
