import React from 'react'
import Image from 'next/image'

function PortfolioWebCard() {
    const Card = [
        {
            name: "MU Play",
            img: 'https://res.cloudinary.com/dgyudczza/image/upload/v1677224074/Portfolio/Website/screencapture-localhost-3000-2023-02-24-12_59_52_pkznpr.png',
            alt: 'MU PLAY OTT',
            link: 'https://muplay.vercel.app/',
            logo: 'https://res.cloudinary.com/dgyudczza/image/upload/v1677216559/muplay/Muplay_cv3hsy.png',
        },
        {
            name: "Mayvent",
            img: 'https://res.cloudinary.com/dgyudczza/image/upload/v1688576843/Portfolio/Website/screencapture-localhost-3000-2023-07-05-22_35_05_xf2hkc.png',
            alt: 'Mayvent',
            link: 'https://mayvent-task.vercel.app/',
            logo: 'https://res.cloudinary.com/dgyudczza/image/upload/v1688402995/mayvent/m_nitssu.png',
        },
        {
            name: "Zezo Softwares",
            img: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1669877038/AK/screencapture-zezo-vercel-app-2022-12-01-12_11_11_lvyv83.webp',
            alt: 'Zezosoft / Zezo Softwares',
            link: 'https://zezo.vercel.app/',
            logo: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1669877567/AK/White_Logo_pwpqkh_f5odqw.webp',
        },
        {
            name: "Mission20",
            img: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1669878708/AK/M20_ovetqf.webp',
            alt: 'Mission20',
            link: 'https://m20.vercel.app/',
            logo: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1669878486/AK/logo03_abwhaz_ju7dug.webp',
        },
        {
            name: "Zezo.in",
            img: 'https://res.cloudinary.com/dgyudczza/image/upload/v1681279792/zezo.in/2023_13_16_21_GMT_5_30_nqcsxf.jpg',
            alt: 'Zezo.in',
            link: 'https://zezoin.vercel.app/',
            logo: 'https://res.cloudinary.com/dgyudczza/image/upload/v1680774195/zezo.in/Logo_yrfljm.png_qikx3y.png',
        },
        {
            name: "Mufti Sufyan Portfolio",
            img: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1669879084/AK/screencapture-muftisufyanmansurpuri-vercel-app-2022-12-01-12_46_12_pu7aov.webp',
            alt: 'Mufti Sufyan Mansurpuri',
            link: 'https://muftisufyanmansurpuri.vercel.app/',
            logo: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1669880761/AK/logo_rmj1wg_z65jix.webp',
        },        
        {
            name: "Xeon",
            img: 'https://res.cloudinary.com/dgyudczza/image/upload/v1680160723/Portfolio/Website/screencapture-xeon-vercel-app-2023-03-30-12_29_55_k6zprp.png',
            alt: 'xeon',
            link: 'https://xeon.vercel.app/',
            logo:'https://res.cloudinary.com/dgyudczza/image/upload/v1680165197/Portfolio/D32051A3-8282-4C74-ADBC-F29DD6EC0D49_nw36fx.png',

        },
        {
            name: "Text Converter",
            img: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1670223394/AK/screencapture-textconvo-vercel-app-2022-12-05-12_17_36_mbvk4o.webp',
            alt: 'Textconvo / Text Converter',
            link: 'https://textconvo.vercel.app/',
            logo: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1670223354/AK/screencapture-textconvo-vercel-app-2022-12-05-12_17_36_1_dmu8wq.webp',
        },

    ]
    return (
        <>
            <div className='laptop:mx-16 tablet:mx-5 py-20' id='Projects'>
                <div className='grid lap:grid-cols-3 tab:grid-cols-2'>
                    {
                        Card.map((item, index) => (
                            <div key={index} data-aos="zoom-in" className='my-5 w-[90%] mx-auto' >
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className=''>
                                    <div className='hidden lap:block my-1 relative lap:w-[100%] bg-white rounded-md overflow-hidden shadow-2xl hover:border-4 hover:border-white lap:h-[18rem] mx-auto'>
                                        <div className="image-wrap">
                                            <Image
                                                src={item.img}
                                                alt={item.alt}
                                                className='h-fit'
                                                objectFit='cover'
                                                layout='fill'
                                            />
                                        </div>

                                    </div>
                                    <div className='lap:hidden my-1 relative h-20 rounded-md overflow-hidden shadow-2xl hover:border-4 hover:border-white w-[50%] mx-auto'>
                                        <Image
                                            src={item.logo}
                                            alt={item.alt}
                                            objectFit='contain'
                                            layout='fill'
                                        />

                                    </div>
                                    <h2><div className='text-white text-center'>{item.name}</div></h2>
                                </a>

                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default PortfolioWebCard