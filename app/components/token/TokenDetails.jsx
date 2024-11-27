import Image from 'next/image'
import React from 'react'

const TokenDetails = () => {
  return (
    <div className='token-details  mx-auto flex night-sky-stars-bg md:mt-48 md:pb-[300px]'>
      <div className=' lg:w-[1185px] lg:h-[638px] mx-auto flex  justify-between p-20 text-white relative'>
        <div className='flex flex-col'>
          <h2 className='uppercase'>Token Details</h2>
          <p className='w-[80%]'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            quasi odio, maxime quibusdam est omnis magni dolores minus accusamus
            aliquam!
          </p>
          <div className='grid grid-cols-3  text-3xl border-b border-yellow-600 border-dashed lg:w-[80%]'>
            <div className='p-5 border-r border-yellow-600 border-dashed'>
              <h4 className='text-3xl mb-4'>Token Name</h4>
              <p>LUCKYHUNTER</p>
            </div>
            <div className='p-5 border-r border-yellow-600 border-dashed'>
              <h4 className='text-3xl mb-4'>Token Symbol</h4>
              <p>$LHUNT</p>
            </div>
            <div className='p-5'>
              <h4 className='text-3xl mb-4'>Token Type</h4>
              <p>ETH</p>
            </div>
          </div>
          <div className='flex text-3xl lg:w-[80%] border-b border-yellow-600 border-dashed'>
            <div className='p-5 border-r border-b border-yellow-600 border-dashed'>
              <h4 className='text-3xl mb-4'>Contact Token Address</h4>
              <p>e7d74fd9f22b499186aeac2efd686d27</p>
            </div>
            <div className='p-5'>
              <div className='mx-auto w-[165px]'>
                <h4 className='text-3xl mb-4'>Decimals</h4>
                <p>18</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col token-details-right absolute lg:right-[-150px] lg:w-[370px] lg:h-[510px] lg:p-16 text-center '>
          <div>
            <Image
              src='/images/dice.png'
              width={400}
              height={300}
              className='absolute -top-44 left-0 '
            />
            <div className='mb-4 mt-10'>
              <h4 className='text-3xl mb-3'>Pre-sale Details</h4>
              <p>The pre-sale is live</p>
            </div>
            <div className='mb-4'>
              <h4 className='text-3xl mb-3'>Current $LHUNT Price</h4>
              <p>1 $LHUNT = $0.001</p>
            </div>
            <div className='mb-4'>
              <h4 className='text-3xl mb-3'>Exchange Listing Price</h4>
              <p>1 $LHUNT = $0.001</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TokenDetails
