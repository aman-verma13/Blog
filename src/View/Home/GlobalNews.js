'use client'

import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import MinSizeHomeBlog from './MinSizeHomeBlog';
import SideTitleWithImage from './SideTitleWithImage';
import SectionTitle from './SectionTitle';
import StoryCardWithImage from './StoryCardWithImage';
import TravelGuidSecion from './TravelGuidSecion';

export default function GlobalNews() {
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
            <div className='flex items-center'>
                <div className='min-w-32'>
                    <p className='text-lg font-semibold'>Global News</p>
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

            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 my-7'>
                <MinSizeHomeBlog />
                <div className='flex flex-col gap-5'>
                    <SideTitleWithImage />
                    <SideTitleWithImage />
                    <SideTitleWithImage />
                    <SideTitleWithImage />
                </div>
            </div>

            <div className='my-5'>
                <TravelGuidSecion />
            </div>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
                <div>
                    <SectionTitle title={'Gadgets'} color={'bg-purple-500'} />
                    <div className='my-4'>
                        <MinSizeHomeBlog />
                    </div>
                    <div className='mb-5'>
                        <SideTitleWithImage />
                    </div>
                    <div className='mb-5'>
                        <SideTitleWithImage />
                    </div>
                    <div>
                        <Button variant='outlined' style={{padding: '0px', margin: '0px'}}>L</Button>
                        <Button variant='outlined' style={{padding: '0px', marginLeft:'1rem', margin: '0px'}}>R</Button>
                    </div>
                </div>

                <div className=''>
                    <SectionTitle title={'Receipes'} color={'bg-yellow-400'} />
                    <div className='my-4'>
                        <MinSizeHomeBlog />
                    </div>
                    <div className='mb-5'>
                        <SideTitleWithImage />
                    </div>
                    <div className='mb-5'>
                        <SideTitleWithImage />
                    </div>
                </div>
            </div>
        </div>
    )
}
