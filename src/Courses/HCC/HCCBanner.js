import React from 'react'
import crcbanner from '../../images/Courses/TEST.png'

const CRCBanner = () => {
  return (
    <>
    <div>
    <div className='relative'>
            <div className='absolute inset-0 bg-black/25'></div>
            <img src={crcbanner} style={{ width: '100%', height: "100vh", objectFit: "cover" }} alt="cpcbanner" className='z-0' />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 pt-16'>
                <div className='space-y-6 max-w-5xl mx-auto px-4'>
                    <h1 className='text-center text-white text-5xl md:text-6xl font-extrabold tracking-tight animate-fade-in'>
                        INDIA'S LEADING
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500'> ONLINE & OFFLINE</span>
                    </h1>
                    <h2 className='text-center text-white text-4xl md:text-5xl font-bold tracking-wide animate-slide-up'>
                        Medical Coding Academy
                    </h2>
                    <div className='mt-10 flex justify-center'>
                        <h3 className='text-center text-3xl md:text-4xl font-semibold text-white bg-gradient-to-r from-blue-500 to-teal-400 inline-block px-6 py-2 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300'>
                        Hierarchical Condition Category(HCC)
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CRCBanner 