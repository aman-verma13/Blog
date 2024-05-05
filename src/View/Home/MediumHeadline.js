'use client'

import { Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'

export default function MediumHeadline() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className='col-span-1 md:col-span-2'>
            <div className='flex mb-3 items-center'>
                <div className='min-w-32'>
                    <p className='text-lg font-semibold'>Fitness</p>
                </div>

                <div style={{ height: '2px' }} className='w-full bg-black'></div>
                <div className='min-w-14 text-end'>
                    <div
                        onClick={handleClick}
                    >
                        All
                    </div>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </div>
            </div>

            <div className='flex gap-5 mb-4 items-center'>
                <img alt='image' className='w-48' src='/image2.jpg' />
                <div>
                    <h2 className='text-xl font-bold'>British Study: Daily Workouts Help you Cope Better with Stress</h2>
                    <p className='text-sm py-2'><span className='font-semibold'>FITNESS David Lee</span> - June 3, 2020</p>
                    <p className='text-sm'>People live better in big houses and in big clothes. I try to contrast; life today is full of contrast. We have to change!...</p>
                </div>
            </div>
            <div className='flex gap-5 mb-4 items-center'>
                <img alt='image' className='w-48' src='/image2.jpg' />
                <div>
                    <h2 className='text-xl font-bold'>Discover How Physical Exercises Make your Brain Work Better</h2>
                    <p className='text-sm py-2'><span className='font-semibold'>FITNESS David Lee</span> - June 3, 2020</p>
                    <p className='text-sm'>People live better in big houses and in big clothes. I try to contrast; life today is full of contrast. We have to change!...</p>
                </div>
            </div>
            <div className='flex gap-5 mb-4 items-center'>
                <img alt='image' className='w-48' src='/image2.jpg' />
                <div>
                    <h2 className='text-xl font-bold'>British Study: Daily Workouts Help you Cope Better with Stress</h2>
                    <p className='text-sm py-2'><span className='font-semibold'>FITNESS David Lee</span> - June 3, 2020</p>
                    <p className='text-sm'>People live better in big houses and in big clothes. I try to contrast; life today is full of contrast. We have to change!...</p>
                </div>
            </div>
            <div className='flex gap-5 mb-4 items-center'>
                <img alt='image' className='w-48' src='/image2.jpg' />
                <div>
                    <h2 className='text-xl font-bold'>British Study: Daily Workouts Help you Cope Better with Stress</h2>
                    <p className='text-sm py-2'><span className='font-semibold'>FITNESS David Lee</span> - June 3, 2020</p>
                    <p className='text-sm'>People live better in big houses and in big clothes. I try to contrast; life today is full of contrast. We have to change!...</p>
                </div>
            </div>
            <div className='flex gap-5 mb-4 items-center'>
                <img alt='image' className='w-48' src='/image2.jpg' />
                <div>
                    <h2 className='text-xl font-bold'>British Study: Daily Workouts Help you Cope Better with Stress</h2>
                    <p className='text-sm py-2'><span className='font-semibold'>FITNESS David Lee</span> - June 3, 2020</p>
                    <p className='text-sm'>People live better in big houses and in big clothes. I try to contrast; life today is full of contrast. We have to change!...</p>
                </div>
            </div>

        </div>
    )
}
