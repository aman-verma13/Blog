'use client'

import { Avatar } from '@mui/material'
import React from 'react'

export default function PopularBlog() {
    return (
        <div className='mt-4 flex items-center gap-4'>
            <div>
                <Avatar alt="Remy Sharp" src="/first.jpg" sx={{ width: 112, height: 112 }} />
            </div>
            <div>
                <p style={{ fontSize: '13px' }} className='uppercase'>style</p>
                <h1 className='font-bold leading-snug text-lg mt-1'>What Makeup to Wear Daily, No Matter What You’ve Got Planned</h1>
            </div>
        </div>
    )
}
