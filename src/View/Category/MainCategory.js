import React from 'react'
import CardWithImage from './CardWithImage'
import BlogWithTitle from './BlogWithTitle'
import StayConnected from '../About/StayConnected'

export default function MainCategory() {
    return (
        <>
            <div className='mt-4'>
                <h2 className='text-3xl font-semibold'>Fashion</h2>
            </div>

            <div className='grid grid-cols-1 mt-4 sm:grid-cols-2 gap-2 lg:grid-cols-4'>
                <CardWithImage />
                <CardWithImage />
                <CardWithImage />
                <CardWithImage />
            </div>

            <div className='grid gap-5 mt-8 grid-cols-2 md:grid-cols-3'>
                <div className='col-span-2'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                        <div>
                            <BlogWithTitle />
                        </div>
                        <div>
                            <BlogWithTitle />
                        </div>
                        <div>
                            <BlogWithTitle />
                        </div>
                        <div>
                            <BlogWithTitle />
                        </div>
                        <div>
                            <BlogWithTitle />
                        </div>
                        <div>
                            <BlogWithTitle />
                        </div>
                    </div>
                </div>

                <div className='col-span-2 md:col-span-1'>
                    <StayConnected />
                </div>
            </div>
        </>
    )
}
