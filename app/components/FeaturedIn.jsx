import Image from 'next/image'
import React from 'react'

const FeaturedIn = () => {
  return (
    <div className='night-bg as-seen-in'>
      <div className='container mx-auto text-center lg:py-20'>
        <div className=''>
          <h4 className='text-[40px] text-yellow-custom uppercase font-bold'>
            As Seen in
          </h4>
        </div>
        <div className='grid grid-cols-4 mt-10 '>
          <div className='border-r border-dashed border-gray-700 pb-14'>
            <Image
              src='/images/brand1.svg'
              width={237}
              height={37}
              alt=''
              className='mx-auto'
            />
          </div>
          <div className='border-r border-dashed border-gray-700'>
            <Image
              src='/images/brand2.svg'
              width={172}
              height={61}
              alt=''
              className='mx-auto'
            />
          </div>
          <div className='border-r border-dashed border-gray-700'>
            <Image
              src='/images/brand3.svg'
              width={239}
              height={51}
              alt=''
              className='mx-auto'
            />
          </div>
          <div className=''>
            <Image
              src='/images/brand4.svg'
              width={212}
              height={62}
              alt=''
              className='mx-auto'
            />
          </div>
        </div>
        <div className='grid grid-cols-3 border-t border-dashed border-gray-700'>
          <div className='border-r border-dashed border-gray-700 pt-8'>
            <Image
              src='/images/brand6.svg'
              width={280}
              height={64}
              alt=''
              className='mx-auto'
            />
          </div>

          <div className='border-r border-dashed border-gray-700 pt-8'>
            <Image
              src='/images/brand5.svg'
              width={118}
              height={99}
              alt=''
              className='mx-auto'
            />
          </div>
          <div className='border- border-dashed border-gray-700 pt-8'>
            <Image
              src='/images/brand7.svg'
              width={237}
              height={37}
              alt=''
              className='mx-auto'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedIn
