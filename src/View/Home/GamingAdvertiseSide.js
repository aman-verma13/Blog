'use client'

import { Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react'
import MinSizeHomeBlog from './MinSizeHomeBlog';
import SectionTitle from './SectionTitle';
import TextArticle from './TextArticle';

export default function GamingAdvertiseSide() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <div>
                <SectionTitle title="Must Read" color="bg-green-400" />
            </div>

            <div>
                <TextArticle />
                <TextArticle />
                <TextArticle />
            </div>
        </div>
    )
}
