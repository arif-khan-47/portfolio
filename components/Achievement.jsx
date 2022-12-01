import React from 'react'

const data = [
  {
    link: '/',
    achievements: 'Got appreciation letter from zezo for my work on project Mission20.',
    date: '1 Oct 2022'
  },

]



function Achievement() {
  return (
    <div className='' id='Achievement'>
      <div className='py-20 grid grid-cols-1 lap:grid-cols-3 mx-10'>
        <div className='col-span-1 m-auto text-4xl justify-between text-white'>
          Achievements
        </div>

        <div className='col-span-2 lap:flex'>
          <div className='lap:h-full lap:w-[3px] h-[3px] my-5 lap:my-0 bg-white'></div>
          <div data-aos="fade-right" className='lap:ml-20 flex'>
            <div className='text-2xl text-center lap:text-left text-white'>
              <ul className='list-disc ml-10'>
                {
                  data.map((item, index) => {
                    return (
                      <a href={item.link} key={index} target="_blank" rel="noopener noreferrer">
                        <li className='hover:underline cursor-pointer mb-2'>
                          {item.achievements}<div>({item.date})</div>
                        </li>
                      </a>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achievement