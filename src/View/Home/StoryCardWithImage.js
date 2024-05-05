import React from 'react'

export default function StoryCardWithImage() {
    return (
        <div className='relative'>
            <img alt='image' className='min-h-80 object-cover' src='/garden.jpg' />
            <div className='absolute cursor-pointer inset-0'>
                <div className='absolute bottom-0 w-full h-36' style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))' }}></div>
            </div>
            <div className='absolute p-3 text-center bottom-0'>
                <h2 className='uppercase text-white text-sm font-semibold'>Travel</h2>
                <p className='cursor-pointer text-white font-semibold'>
                    <a>Out of This World Experience with these Exotic Travel Destinations</a>
                </p>
            </div>
        </div>
    )
}
