import React from 'react'

export default function SideTitleWithImage() {
    return (
        <div className='flex gap-4'>
            <div className=''>
                <img alt='image' className='object-cover cursor-pointer max-w-32 min-h-24' src='/Head1.jpg' />
            </div>
            <div>
                <h1 className='font-bold text-lg leading-snug'>
                    <a className='cursor-pointer'>More and More People Stay Home as Coronavirus Spreads</a>
                </h1>
                <div className='mt-1'>
                    <time className='text-sm'>June 3, 2020</time>
                </div>
            </div>
        </div>
    )
}
