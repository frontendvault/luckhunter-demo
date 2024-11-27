import Image from 'next/image'
import { useState } from 'react'

export default function LuckhunterMetaverse () {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      imgSmall: '/images/lease-casino.png',
      imgBig: '/images/lease-own-big.png',
      title: 'OWN LEASE OR RENT CASINOS ',
      description:
        'Nullam semper tempus sapien placerat accumsan. Sed pretium ut arcu vel fringilla. Duis accumsan, augue eget elementum dictum, libero odio lacinia felis.'
    },
    {
      imgSmall: '/images/customise-gaming-assets.png',
      imgBig: '/images/lease-own-big.png',
      title: 'OWN LEASE OR RENT CASINOS ',
      description:
        'Nullam semper tempus sapien placerat accumsan. Sed pretium ut arcu vel fringilla. Duis accumsan, augue eget elementum dictum, libero odio lacinia felis.'
    },
    {
      imgSmall: '/images/lhunt-tokens.png',
      imgBig: '/images/lease-own-big.png',
      title: 'OWN LEASE OR RENT CASINOS ',
      description:
        'Nullam semper tempus sapien placerat accumsan. Sed pretium ut arcu vel fringilla. Duis accumsan, augue eget elementum dictum, libero odio lacinia felis.'
    },
    {
      imgSmall: '/images/vip-rooms-events.png',
      imgBig: '/images/lease-own-big.png',
      title: 'OWN LEASE OR RENT CASINOS ',
      description:
        'Nullam semper tempus sapien placerat accumsan. Sed pretium ut arcu vel fringilla. Duis accumsan, augue eget elementum dictum, libero odio lacinia felis.'
    }
  ]

  return (
    <div className='flex flex-col h-full space-y-6 casino-metaverse py-5 md:py-20'>
      <div className='w-screen lg:w-[1360px] mx-auto '>
        <div className='flex flex-col text-center text-white py-10 w-[100%] lg:w-[80%] lg:mx-auto mb-10'>
          <h3>What is LuckHunter Casino Metaverse?</h3>
          <p className='text-base md:text-lg'>
            LuckHunter brings the top 5 iconic casino capitals of the world to a
            metaverse experience, where you can own, lease, or rent casinos and
            gaming assets using LHUNT tokens.
          </p>
        </div>
        <div className='flex flex-grow  p-6 rounded-lg w-[1320px] h-[810px]  relative metaverse-holder lg:-mt-[100px] pt-10'>
          <div className=' flex justify-center mx-auto  '>
            <Image
              src={tabs[activeTab].imgBig}
              width={1217}
              height={573}
              alt=''
            />
          </div>
          <div className='flex  text-left absolute px-20 py-10 items-end h-full mb-[220px]'>
            <div className='flex justify-between'>
              <h3 className=' font-bold mb-4 md:w-[50%] text-yellow-custom '>
                {tabs[activeTab].title}
              </h3>
              <p className='md:w-[30%] text-white'>
                {tabs[activeTab].description}{' '}
              </p>
            </div>
          </div>
        </div>

        <div className='flex justify-center space-x-4 flex-col md:flex-row'>
          {tabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(index)}
              // css only: bg-gradient-to-b from-fuchsia-800/50 via-fuchsia-900/20
              className={`metaverse-item cursor-pointer flex-col flex justify-center rounded-lg text-center text-sm font-medium  h-[325px] w-[400px] relative ${
                activeTab === index ? ' ' : ''
              }`}
            >
              <div>
                <Image
                  src={tab.imgSmall}
                  width={159}
                  height={185}
                  alt=''
                  className=' mx-auto p-0 m-0 my-auto -mt-20'
                  style={{ width: 'auto', width: 'auto' }}
                />
              </div>
              <p className='px-10 text-lg text-white -mt-50 absolute bottom-10'>{tab.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
