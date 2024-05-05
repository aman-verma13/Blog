import React from 'react'
import SectionTitle from './SectionTitle'
import StoryCardWithImage from './StoryCardWithImage'

export default function TravelGuidSecion() {
    return (
        <div className='mb-10'>
            <SectionTitle color={'bg-green-400'} title={'Travel Guides'} />

            <div className='flex md:flex-row gap-2 mt-5 flex-col'>
                <StoryCardWithImage />
                <StoryCardWithImage />
                <StoryCardWithImage />
            </div>
        </div>
    )
}
