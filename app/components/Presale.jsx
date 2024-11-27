import Image from 'next/image'
import React from 'react'

const Presale = () => {
  const boxes = [
    {
      number: 1,
      heading: 'Connect Your Wallet',
      description: 'Description of box 1, explaining its features and benefits.'
    },
    {
      number: 2,
      heading: 'Choose your payment method',
      description:
        'Curabitur urna libero, malesuada eget nisl vitae, varius posuere.'
    },
    {
      number: 3,
      heading: 'ClaiM you $LHUNT',
      description:
        'Curabitur urna libero, malesuada eget nisl vitae, varius posuere tortor. '
    }
  ]

  return (
    <div className='presale-bg bg-black'>
      <div className='container mx-auto px-6 py-10 md:py-24'>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='flex-1 text-white'>
            <h2 className='font-semibold  mb-4 -mt-6'>PRESALE IS LIVE</h2>
            <p className=' mb-6'>
              This is the description section that gives a brief overview of
              what the boxes below are about and how they relate to the main
              heading.
            </p>
            <div className='space-y-4 lg:ml-[60px] md:mt-10'>
              {boxes.map((box, index) => (
                <div
                  key={index}
                  className='shadow-md p-4 lg:py-4 presale-item-bg h-[195px] lg:w-[440px]'
                >
                  <div className='lg:w-[90%] mx-auto'>
                    <span className='text-2xl md:text-4xl font-black text-yellow-custom'>
                      0{box.number}
                    </span>
                    <h3 className='text-xl md:text-3xl font-semibold mt-2'>
                      {box.heading}
                    </h3>
                    <p className='text-base  mt-2'>{box.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='flex-1 presale-form-bg w-full h-full lg:w-[700px] lg:h-[920px] flex items-center justify-center'>
            <form className='p-10 lg:w-[90%]  mx-auto  shadow rounded space-y-6 border border-sky-500 text-white bg-gradient-to-r from-sky-400/20 to-sky-600/30 inner-shadow'>
              <div>
                <div className='flex justify-between text-yellow-custom mb-2'>
                  <span>Presale Stage 1</span>
                  <span>Raised :$40560.36</span>
                </div>
                <div className='w-full bg-gray-200 rounded-full h-6 dark:bg-gray-700 relative shadow-xl'>
                  <div className='bg-fuchsia-700 h-6 rounded-full w-[50%]'></div>
                  <span className='uppercase text-center absolute left-0 right-0 top-0'>
                    Untill price increase
                  </span>
                </div>
                <div className='flex justify-end'>
                  <span>Target : $252222</span>
                </div>
              </div>
              <h3 className='border-y text-2xl font-bold text-center text-white py-5 '>
                1 LHUNT = $0.001
              </h3>
              <div className='flex justify-between space-x-4 '>
                <button
                  type='button'
                  className='flex-grow py-2 text-white  py-3 px-2 border border-gray-400 bg-gray-800/[.5]'
                >
                  Listing Price $0.001(+400%)
                </button>
                <button
                  type='button'
                  className='flex-grow py-2  text-white  py-3 px-2 border border-gray-400 bg-gray-800/[.5]'
                >
                  Next Price $0.001(+400%)
                </button>
              </div>
              <div className='grid grid-cols-5 gap-4'>
                <button
                  type='button'
                  className='py-2 border border-gray-400  text-white font-semibold h-[53px] hover:bg-gradient-to-r :hoverfrom-indigo-500 via-purple-500 to-purple-800'
                >
                  <Image
                    src={'/images/eth.svg'}
                    width={48}
                    height={21}
                    className='mx-auto'
                  />
                </button>
                <button
                  type='button'
                  className='py-2 border border-gray-400  text-white font-semibold h-[53px] hover:bg-gradient-to-r :hoverfrom-indigo-500 via-purple-500 to-purple-800'
                >
                  <Image
                    src={'/images/usdt.svg'}
                    width={64}
                    height={21}
                    className='mx-auto'
                  />
                </button>
                <button
                  type='button'
                  className='py-2 border border-gray-400 hover:bg-blue-500 text-white h-[53px] hover:bg-gradient-to-r :hoverfrom-indigo-500 via-purple-500 to-purple-800'
                >
                  <Image
                    src={'/images/bnb.svg'}
                    width={58}
                    height={21}
                    className='mx-auto'
                  />
                </button>
                <button
                  type='button'
                  className='py-2 border border-gray-400 hover:bg-green-500 text-white h-[53px] hover:bg-gradient-to-r :hoverfrom-indigo-500 via-purple-500 to-purple-800'
                >
                  <Image
                    src={'/images/matic.svg'}
                    width={71}
                    height={21}
                    className='mx-auto'
                  />
                </button>
                <button
                  type='button'
                  className='py-2 border border-gray-400 hover:bg-purple-500 text-white h-[53px] hover:bg-gradient-to-r :hoverfrom-indigo-500 via-purple-500 to-purple-800'
                >
                  <Image
                    src={'/images/card.svg'}
                    width={69}
                    height={21}
                    className='mx-auto'
                  />
                </button>
              </div>
              <div className='space-y-2'>
                <label
                  htmlFor='inputField'
                  className='flex justify-between font-medium '
                >
                  <span>You Send</span> <span>Max : 64651.8</span>
                </label>
                <div className='relative'>
                  <input
                    type='text'
                    id='inputField'
                    placeholder='atleast 0.0001'
                    className='w-full py-3 px-2 border border-gray-400 bg-gray-800/[.5] '
                  />
                  <div className='appended absolute right-3 top-3 flex uppercase'>
                    <Image
                      src={'/images/eth.svg'}
                      height={22}
                      width={60}
                      className='mr-1'
                    />
              
                  </div>
                </div>
                <label
                  htmlFor='inputField'
                  className='flex justify-between font-medium '
                >
                  <span>You Will Recieve</span> <span>$125.64</span>
                </label>
                <div className='relative'>
                  <input
                    type='text'
                    id='inputField'
                    placeholder='atleast 0.0001'
                    className='w-full py-3 px-2 border border-gray-400 bg-gray-800/[.5]'
                  />
                  <div className='appended absolute right-3 top-3 flex uppercase'>
                    <Image
                      src={'/images/lh-small.svg'}
                      height={22}
                      width={22}
                      className='mr-1'
                    />
                    lhunt
                  </div>
                </div>
              </div>

              {/* Button at the End */}
              <div className='text-center'>
                <button
                  type='submit'
                  className='py-2  text-white font-bold rounded shadow big-button h-[100px] w-[425px]'
                >
                  CONNECT WALLET
                </button>
                <p>[0x16977792...5ABF]</p>
                <p className='text-yellow-custom'>
                  Do not pay directly to this address
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Presale
