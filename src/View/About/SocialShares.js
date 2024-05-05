import React from 'react'
import { FaFacebookF, FaPinterestP, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function SocialShares() {
    return (
        <>
            <div className='my-8 grid xs:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 lg:grid-cols-4 grid-cols-2 gap-3'>

                <div className='flex items-center border py-1 px-3 border-gray-400'>
                    <FaFacebookF color='#1877F2' />
                    <div style={{ width: '1px' }} className='mx-2 h-4 bg-gray-400'></div>
                    <div className='flex w-full'>
                        <p className='font-semibold' style={{ fontSize: '13px', color: '#1877F2' }}>Facebook</p>
                    </div>
                </div>

                <div className='flex items-center border py-1 px-3 border-gray-400'>
                    <FaXTwitter />
                    <div style={{ width: '1px' }} className='mx-2 h-4 bg-gray-400'></div>
                    <div>
                        <p className='font-semibold' style={{ fontSize: '13px', color: '#1DA1F2' }}>Twitter</p>
                    </div>
                </div>

                <div className='flex items-center border py-1 px-3 border-gray-400'>
                    <FaPinterestP color='#E60023' />
                    <div style={{ width: '1px' }} className='mx-2 h-4 bg-gray-400'></div>
                    <div>
                        <p className='font-semibold' style={{ fontSize: '13px', color: '#E60023' }}>Pinterest</p>
                    </div>
                </div>

                <div className='flex items-center border py-1 px-3 border-gray-400'>
                    <FaWhatsapp color='#25D366' />
                    <div style={{ width: '1px' }} className='mx-2 h-4 bg-gray-400'></div>
                    <div>
                        <p className='font-semibold' style={{ fontSize: '13px', color: '#25D366' }}>Whatsapp</p>
                    </div>
                </div>
            </div>
        </>
    )
}
