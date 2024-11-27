import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className=' text-white footer-bg lg:py-10'>
      <div className='container mx-auto footer-bg-section py-10 px-[80px] md:h-[700px]'>
        <div className='text-center mb-6 md:mt-7'>
          <Image
            src='/images/footer-logo.svg'
            width={499}
            height={114}
            className='mx-auto'
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left border-t border-b border-gray-600'>
          <div className='border-r border-gray-600 py-20'>
            <h3 className='text-lg font-semibold lg:text-3xl mb-8'>Our Story</h3>
            <p className='text-gray-400'>
              Integer sagittis magna sapien, ac congue ex faucibus vitae. Duis
              eget sagittis nisi. Mauris viverra purus non turpis fermentum,
              eget dapibus metus blandit. Nunc eu leo lacinia.
            </p>
          </div>
          <div className='md:px-10 border-r border-gray-600 py-20'>
            <h3 className='text-xl lg:text-3xl font-semibold mb-8'>Quick Links</h3>
            <div className='flex justify-between'>
              <ul className='space-y-2'>
                <li>
                  <a href='#' className='hover:text-gray-300'>
                    Walllet
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-gray-300'>
                    How To Buy
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-gray-300'>
                    Visit
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href='#' className='hover:text-gray-300'>
                    Casino
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-gray-300'>
                    Audit
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-gray-300'>
                    Whitepaper
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='py-20'>
            <h3 className='text-lg font-semibold lg:text-3xl mb-8'>HELP</h3>
            <p className='text-gray-400'>
              If you have any issues contact us at{' '}
              <a href='#' className='text-yellow-custom'>help@luckhunter.com</a> our our live chat support
            </p>
          </div>
        </div>
        <div className='mt-6 text-center pt-4 flex justify-between'>
          <span className='text-gray-400'>
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </span>
          <span>
            <ul className='flex items-center gap-4'>
              <li> <Image src={"/images/facebook.svg"} height={24} width={24}/> </li>
              <li> <Image src={"/images/instagram.svg"} height={24} width={24}/> </li>
              <li> <Image src={"/images/linkedin.svg"} height={24} width={24}/> </li>
              <li> <Image src={"/images/youtube.svg"} height={24} width={31}/> </li>
            </ul>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
