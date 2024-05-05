import React from 'react'
import SectionTitle from '../Home/SectionTitle'
import styles from '../Home/home.module.css'
import SocialMediaCounts from '../Home/SocialMediaCounts'
import PopularBlog from '../Home/PopularBlog'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'

export default function StayConnected() {
  return (
    <div className=''>
      <SectionTitle title="Stay Connected" color="bg-red-400" />

      <div className='mt-5'>
        <div>
          {/* <div className='flex justify-between'>
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
          </div> */}

          <div className='flex flex-col items-center'>
            <p className='my-2 text-sm text-slate-500'>Advertisement</p>
            <img className='w-80' alt='image' src='/rec300.png.webp' />
          </div>

          <div className='mt-5'>
            <SectionTitle color={'bg-red-500'} title={'Latest Article'} />
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
      </div>
    </div>
  )
}
