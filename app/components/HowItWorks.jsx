export default function HowItWorks () {
  // Fake JSON Data
  const data = {
    heading: 'HOW IT WORKS',
    secondRow: [
      {
        number: "01",
        heading: 'Join the Metaverse',
        description: 'Sign up and create your account'
      },
      {
        number: "03",
        heading: 'Buy, Lease, or Rent',
        description: 'Acquire a casino or gaming asset.'
      },
      {
        number: "05",
        heading: 'Grow & Earn',
        description: 'Manage your casino and earn from player activity.'
      }
    ],
    thirdRow: [
      {
        number: "02",
        heading: 'Choose Your City',
        description: 'Explore and select the city of your choice.'
      },
      {
        number: "04",
        heading: 'Customize & Manage',
        description: 'Use LHUNT tokens to personalize your space'
      }
    ]
  }

  return (
    <div className=' md:py-[50px]  howit-works-bg'>
      <div className='container mx-auto howit-work-diagram lg:py-[100px]'>
          <h2 className=' text-white text-center mb-4 md:mb-5'>{data.heading}</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {data.secondRow.map((item, index) => (
            <div key={index} className='text-center space-y-4 w-44 mx-auto'>
              <div  
                className={`w-[65px] h-[65px] mx-auto flex items-center justify-center rounded-full border-2  border-dashed border-purple-500  font-bold text-3xl text-white mb-6`}
              >
               {item.number}
              </div>
              <h3 className='text-lg font-semibold text-white mb-2 md:mb-3'>
                {item.heading}
              </h3>
              <p className='text-white'>{item.description}</p>
            </div>
          ))}
        </div>
        <div className='flex justify-evenly md:w-[86%] mx-auto mt-20 '>
          {data.thirdRow.map((item, index) => (
            <div key={index} className='p-6 text-center md:w-[300px] mx-50 mt-20'>
              <div
                className={`w-[65px] h-[65px] mx-auto flex items-center justify-center rounded-full  border-2 border-dashed border-purple-500 font-bold text-3xl text-white mb-6`}
              >
                {item.number}
              </div>
              <h3 className='text-xl font-semibold text-white mb-3'>
                {item.heading}
              </h3>
              <p className='text-white'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
