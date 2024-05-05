'use client'

import { Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react'
import SectionTitle from './SectionTitle';
import MinSizeHomeBlog from './MinSizeHomeBlog';
import SideTitleWithImage from './SideTitleWithImage';
import ArticleCard from './ArticleCard';

export default function LatestArticle() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className='col-span-1 md:col-span-2'>
            <SectionTitle title="Latest Articles" color="bg-green-400" />

            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 my-7'>
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
            </div>
        </div>
    )
}
