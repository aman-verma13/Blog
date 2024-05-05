import React from 'react'

export default function BlogWithTitle() {
    return (
        <div>
            <img alt='image' className='h-64 w-full object-cover' src='/4.jpg.webp' />
            <p className='py-2 mt-2 text-sm text-slate-500 uppercase'>Facts</p>
            <h1 className='text-xl font-semibold'>The Travel Insurance Catch that can Double Your Cover in Two Months</h1>
            <p style={{ fontSize: '13px' }} className='py-2'><span className='font-semibold'>David Lee</span> - June 3, 2020</p>
        </div>
    )
}
