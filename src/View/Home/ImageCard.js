import React from 'react'

export default function ImageCard() {
    return (
        <div className='grid mt-8 w-full gap-3 mb-4 grid-cols-4'>
            <div className='relative cursor-pointer'>
                <img alt='image' className='object-cover h-80' src='/image1.jpg' />
                <div style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.2))' }} className='absolute w-full h-full flex flex-col items-center justify-center text-center bottom-0 px-4'>
                    <h1 className='uppercase text-sm cursor-pointer text-white'>
                        <a>Fashion</a>
                    </h1>
                    <h1 className='text-lg text-white py-2 font-bold'>
                        <a className='cursor-pointer'>Amazing Model On Site In Ibiza, On the Best Rated Photo Location</a>
                    </h1>
                    <time className='text-white text-sm'>David Lee - June 3, 2020</time>
                </div>
            </div>
            <div className='relative cursor-pointer'>
                <img alt='image' className='object-cover h-80' src='/image1.jpg' />
                <div style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.2))' }} className='absolute w-full h-full flex flex-col items-center justify-center text-center bottom-0 px-4'>
                    <h1 className='uppercase text-sm cursor-pointer text-white'>
                        <a>Fashion</a>
                    </h1>
                    <h1 className='text-lg text-white py-2 font-bold'>
                        <a className='cursor-pointer'>Amazing Model On Site In Ibiza, On the Best Rated Photo Location</a>
                    </h1>
                    <time className='text-white text-sm'>David Lee - June 3, 2020</time>
                </div>
            </div>
            <div className='relative cursor-pointer'>
                <img alt='image' className='object-cover h-80' src='/image1.jpg' />
                <div style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.2))' }} className='absolute w-full h-full flex flex-col items-center justify-center text-center bottom-0 px-4'>
                    <h1 className='uppercase text-sm cursor-pointer text-white'>
                        <a>Fashion</a>
                    </h1>
                    <h1 className='text-lg text-white py-2 font-bold'>
                        <a className='cursor-pointer'>Amazing Model On Site In Ibiza, On the Best Rated Photo Location</a>
                    </h1>
                    <time className='text-white text-sm'>David Lee - June 3, 2020</time>
                </div>
            </div>
            <div className='relative cursor-pointer'>
                <img alt='image' className='object-cover h-80' src='/image1.jpg' />
                <div style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.2))' }} className='absolute w-full h-full flex flex-col items-center justify-center text-center bottom-0 px-4'>
                    <h1 className='uppercase text-sm cursor-pointer text-white'>
                        <a>Fashion</a>
                    </h1>
                    <h1 className='text-lg text-white py-2 font-bold'>
                        <a className='cursor-pointer'>Amazing Model On Site In Ibiza, On the Best Rated Photo Location</a>
                    </h1>
                    <time className='text-white text-sm'>David Lee - June 3, 2020</time>
                </div>
            </div>
        </div>
    )
}
