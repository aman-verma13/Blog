import { Button, TextField } from '@mui/material'
import React from 'react'

export default function LeaveAReply() {
    return (
        <div>
            <h1 className='text-sm font-semibold'>LEAVE A REPLY</h1>
            <div className='mt-2'>
                <TextField fullWidth multiline placeholder='comment:' rows={4} />
            </div>
            <div className='mt-4'>
                <TextField placeholder='Name' size='small' fullWidth />
            </div>
            <div className='mt-4'>
                <TextField placeholder='Email' type='email' size='small' fullWidth />
            </div>
            <div className='mt-4'>
                <Button variant='contained'>Post comment</Button>
            </div>
        </div>
    )
}
