import React from 'react'

export default function SectionTitle({title, color}) {
  return (
    <div className='flex gap-5 items-center'>
        <div className=''>
            <p style={{ whiteSpace: 'nowrap' }} className='uppercase text-lg font-semibold'>
                {title}
            </p>
        </div>

        <div className='w-full'>
            <div className={`w-full h-1 ${color}`}></div>
        </div>
    </div>
  )
}
