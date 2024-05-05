import React from 'react'
import StayConnected from './StayConnected'
import { Avatar } from '@mui/material'
import { IoEye } from "react-icons/io5";
import SocialShares from './SocialShares';
import TravelGuidSecion from '../Home/TravelGuidSecion';
import LeaveAReply from './LeaveAReply';

export default function AboutComponent() {
    return (
        <div className='lg:flex block lg:items-start my-5 gap-7'>
            <div className='col-span-2'>
                <h4 className='uppercase text-sm'>Global</h4>
                <h1 className='cursor-pointer text-3xl font-semibold my-4'>
                    <a>More and More People Stay Home as Coronavirus Spreads</a>
                </h1>

                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <Avatar alt="Remy Sharp" sx={{ width: 30, height: 30 }} src="/first.jpg" />
                        <time>By David Lee June 3, 2020</time>
                    </div>
                    <div className='flex items-center gap-2'>
                        <IoEye />
                        <span style={{ fontSize: '12px' }}>8021</span>
                    </div>
                </div>

                <div>
                    <SocialShares />
                </div>

                <div className='mt-5'>
                    <img alt='image' className='object-contain w-full h-full' src='/Head1.jpg' />

                    <p className='my-8'>
                        People live better in big houses and in big clothes. I try to contrast; life today is full of contrast. We have to change! I am not interested in the past, except as the road to the future. Give me time and I’ll give you a revolution. I think the idea of mixing luxury and mass-market fashion is very modern. I want people to be afraid of the women I dress.
                    </p>

                    <h2 className='text-3xl font-semibold'>Mass-market fashion is very modern</h2>

                    <p className='my-8'>
                        I think the idea of mixing luxury and, very now no one wears head-to-toe designer anymore. There has to be a balance between your mental satisfaction and the financial needs of your company. A girl should be two things: classy and fabulous.
                    </p>

                    <img alt='image' className='object-contain w-full h-full' src='/p3.jpg.webp' />

                    <p className='my-8'>
                        I never look at other people’s work. I can’t get sucked into that celebrity thing, because I think it’s just crass. Give me time and I’ll give you a revolution. I can’t get sucked into that celebrity thing, because I think it’s just crass.
                    </p>

                    <p className='my-8'>
                        I can design a collection in a day and I always do, cause I’ve always got a load of Italians on my back, moaning that it’s late. Sometimes the simplest things are the most profound.
                    </p>

                    <div className='lg:flex gap-6 block'>
                        <img alt='image' className='h-96' src='/p2-696x899.jpg.webp' />
                        <div>

                            <p className='my-8'>
                                Luxury will be always around, no matter what happens in the world. There is always the new project, the new opportunity. Attention to detail is of utmost importance when you want to look good. I have a fantastic relationship with money. I use it to buy my freedom.
                            </p>
                            <p className='my-8'>
                                I think the idea of mixing luxury and mass-market fashion is very modern, very now no one wears head-to-toe designer anymore. I think the idea of mixing luxury and mass-market fashion is very modern, very now no one wears head-to-toe designer anymore.
                            </p>
                            <p className='my-8'>
                                Confidence. If you have it, you can make anything look good. Abstinence from coffee, tobacco. Adventists has afforded a near-unique opportunity.
                            </p>
                        </div>
                    </div>

                    <div className='mt-4'>
                        <TravelGuidSecion />
                    </div>

                    <div>
                        <LeaveAReply />
                    </div>
                </div>
            </div>

            <div className='sticky min-w-80 mt-4 lg:mt-0 top-0'>
                <StayConnected />
            </div>
        </div>
    )
}
