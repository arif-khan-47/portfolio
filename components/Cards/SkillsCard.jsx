import React from 'react'
import Image from 'next/image'


function SkillsCard({ title, img, alt }) {
    return (
        <div className='flex'>
            <div data-aos="zoom-in" className='relative h-10 w-10 lap:h-16 lap:w-16 mr-5 rounded-full hover:border-4'>
                <Image
                    src={img}
                    objectFit='contain'
                    layout='fill'
                    className='w-fit h-fit rounded-full hover:scale-105'
                    alt={alt}
                />
            </div>
            <div data-aos="fade-right" className={`text-black lap:text-4xl text-2xl my-auto`}>
                <h2>
                    {title}
                </h2>
            </div>
        </div >
    )
}

export default SkillsCard
