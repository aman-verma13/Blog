import React from 'react'
import first from '../../../public/first.jpg'
import styles from './home.module.css'

export default function HomeMain() {
    return (
        <div className='my-5'>
            <div className='grid grid-cols-1 grid-rows-1 gap-1 md:grid-cols-2 md:grid-rows-1'>
                <div className='relative cursor-pointer'>
                    <img alt='image' className='object-contain w-full' src='/first.jpg' />
                    <div className='absolute bottom-0 p-4'>
                        <h2 className='text-white text-sm uppercase'>Style</h2>
                        <p className='text-3xl font-semibold py-2 text-white'>
                            <a>Witnessing the Birth of the New Coronavirus Economy</a>
                        </p>
                        <time className='text-white text-sm'>David Lee - June 3, 2020</time>
                    </div>
                </div>

                <div className={`${styles.homeMainGrid2} md:grid md:grid-cols-2 gap-1 md:grid-rows-2 flex overflow-x-scroll`}>
                    <div className='relative cursor-pointer md:min-w-10 min-w-96 md:h-full md:max-h-full max-h-52'>
                        <img alt='image' className='object-cover w-full md:min-w-0 md:min-h-0 h-full' src={'/second.jpg'} />
                        <div className='absolute bottom-0 p-4'>
                            <h2 className='text-white text-sm uppercase'>Style</h2>
                            <p className='text-xl font-semibold text-white'>
                                <a>Witnessing the Birth of the New Coronavirus Economy</a>
                            </p>
                        </div>
                    </div>
                    <div className='relative cursor-pointer md:min-w-10 min-w-96 md:h-full md:max-h-full max-h-52'>
                        <img alt='image' className='object-cover w-full md:min-w-0 md:min-h-0 h-full' src={'/third.jpg'} />
                        <div className='absolute bottom-0 p-4'>
                            <h2 className='text-white text-sm uppercase'>Style</h2>
                            <p className='text-xl font-semibold text-white'>
                                <a>Witnessing the Birth of the New Coronavirus Economy</a>
                            </p>
                        </div>
                    </div>
                    <div className='relative cursor-pointer md:min-w-10 min-w-96 md:h-full md:max-h-full max-h-52'>
                        <img alt='image' className='object-cover w-full md:min-w-0 md:min-h-0 h-full' src={'/fourth.jpg'} />
                        <div className='absolute bottom-0 p-4'>
                            <h2 className='text-white text-sm uppercase'>Style</h2>
                            <p className='text-xl font-semibold text-white'>
                                <a>Witnessing the Birth of the New Coronavirus Economy</a>
                            </p>
                        </div>
                    </div>
                    <div className='relative cursor-pointer md:min-w-10 min-w-96 md:h-full md:max-h-full max-h-52'>
                        <img alt='image' className='object-cover w-full md:min-w-0 md:min-h-0 h-full' src={'/fifth.jpg'} />
                        <div className='absolute bottom-0 p-4'>
                            <h2 className='text-white text-sm uppercase'>Style</h2>
                            <p className='text-xl font-semibold text-white'>
                                <a>Witnessing the Birth of the New Coronavirus Economy</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
