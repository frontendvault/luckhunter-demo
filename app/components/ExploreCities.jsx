import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'


const ExploreCities = () => {
  const cards = [
    {
      image: '/images/city1.png',
      title: 'Vegas Nova',
      description:
        'A futuristic city of lights where bold neon signs and larger-than-life casinos dominate the skyline. Vegas Nova brings high-energy entertainment, endless excitement, and luxury gaming experiences, making it the ultimate destination for thrill-seekers and high-rollers alike',
      link: '#'
    },
    {
      image: '/images/city2.png',
      title: 'Monarch Isle',
      description:
        'Monarch Isle is a city of elegance and grandeur, ofering a refned atmosphere where the elite gather to play. With its classic European architecture, sophisticated casinos, and exclusive events, this city promises an experience of opulence and high-stakes gaming at its fnest.',
      link: '#'
    },
    {
      image: '/images/city1.png',
      title: 'Vegas Nova',
      description:
        'A futuristic city of lights where bold neon signs and larger-than-life casinos dominate the skyline. Vegas Nova brings high-energy entertainment, endless excitement, and luxury gaming experiences, making it the ultimate destination for thrill-seekers and high-rollers alike',
      link: '#'
    },
    {
      image: '/images/city2.png',
      title: 'Monarch Isle',
      description:
        'Monarch Isle is a city of elegance and grandeur, ofering a refned atmosphere where the elite gather to play. With its classic European architecture, sophisticated casinos, and exclusive events, this city promises an experience of opulence and high-stakes gaming at its fnest.',
      link: '#'
    },
    {
      image: '/images/city1.png',
      title: 'Vegas Nova',
      description:
        'A futuristic city of lights where bold neon signs and larger-than-life casinos dominate the skyline. Vegas Nova brings high-energy entertainment, endless excitement, and luxury gaming experiences, making it the ultimate destination for thrill-seekers and high-rollers alike',
      link: '#'
    },
    {
      image: '/images/city2.png',
      title: 'Monarch Isle',
      description:
        'Monarch Isle is a city of elegance and grandeur, ofering a refned atmosphere where the elite gather to play. With its classic European architecture, sophisticated casinos, and exclusive events, this city promises an experience of opulence and high-stakes gaming at its fnest.',
      link: '#'
    }
  ]

  // Slick slider settings
  const settings = {
     centerMode:true,
    // centerPadding:"100px",
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Adjust for tablets
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640, // Adjust for mobile
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <div className='bg-black text-white explore-cities py-10'>
      <div className=' lg:w-[1600px] mx-auto px-4 py-8'>
        <div className='absolute left-0 right-0 mb-20'>
          <Image src={"/images/iconic-cities.png"} width={1900} height={206}/>
        </div>

        <Slider {...settings} className='space-x-4 my-40'>
          {cards.map((card, index) => (
            <div key={index} className='p-4 explore-iconic-cities-item '>
              <div className=' rounded-lg shadow-md overflow-hidden mt-2 flex-col mx-auto md:w-[400px] md:h-[490px] md:mt-[64px]'>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={320}
                  height={309}
                  className='mx-auto'
                />
                <div className=' p-2 flex flex-col text-center mx-auto md:px-10'>
                  <h3 className='text-3xl font-semibold my-3'>{card.title}</h3>
                  <p className='flex-grow text-base leading-6'>
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default ExploreCities
