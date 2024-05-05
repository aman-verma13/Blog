import React from 'react'

export default function CardWithImage() {
    return (
        <div className='relative'>
            <img alt='image' className='object-cover w-full h-80' src='/image1.jpg' />
            <div style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.2))' }} className='absolute w-full h-full flex flex-col items-center justify-center text-center bottom-0 px-4'>
                <h1 className='uppercase text-sm text-white'>Fashion</h1>
                <h1 className='text-lg text-white py-2 font-bold'>Amazing Model On Site In Ibiza, On the Best Rated Photo Location</h1>
                <p className='text-white text-sm'>David Lee - June 3, 2020</p>
            </div>
        </div>
    )
}
