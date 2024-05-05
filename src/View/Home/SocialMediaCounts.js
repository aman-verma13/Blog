import React from 'react'
import styles from './home.module.css'
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import SectionTitle from './SectionTitle';
import PopularBlog from './PopularBlog';

export default function SocialMediaCounts() {
    return (
        <div>
            <div className='flex justify-between'>
                <div className={styles.social_media_container}>
                    <FaFacebookF className='text-xl md:text-2xl' />
                    <span className='text-sm md:text-lg py-1 mt-1 font-semibold'>25,000</span>
                    <div className='text-slate-600 text-sm md:text-lg'>Fans</div>
                </div>
                <div className={styles.social_media_container}>
                    <FaInstagram className='text-xl md:text-2xl' />
                    <span className='text-sm md:text-lg py-1 mt-1 font-semibold'>25,000</span>
                    <div className='text-slate-600 text-sm md:text-lg'>Followers</div>
                </div>
                <div className={styles.social_media_container}>
                    <FaYoutube className='text-xl md:text-2xl' />
                    <span className='text-sm md:text-lg py-1 mt-1 font-semibold'>25,000</span>
                    <div className='text-slate-600 text-sm md:text-lg'>Subscribers</div>
                </div>
            </div>

            <div className='text-center my-8'>
                <p className='my-2 text-sm text-slate-500'>Advertisement</p>
                <img alt='image' className='w-full' src='/rec300.png.webp' />
            </div>

            <div>
                <SectionTitle color={'bg-red-500'} title={'Most Popular'} />
                <div className='my-2'>
                    <PopularBlog />
                </div>
                <div className='my-2'>
                    <PopularBlog />
                </div>
                <div className='my-2'>
                    <PopularBlog />
                </div>
                <div className='my-2'>
                    <PopularBlog />
                </div>
                <div className='my-2'>
                    <PopularBlog />
                </div>
            </div>
        </div>
    )
}
