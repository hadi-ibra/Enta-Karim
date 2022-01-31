import React from 'react'
import { Typography } from '@mui/material'
// eslint-disable-next-line import/no-unresolved
import { SwiperSlide } from 'swiper/react'
import { Swiper } from 'swiper'
import Card from './Card'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css'
import SwiperSlideItem from '../Beneficiary/SwiperSlide'

const RecentActivities = () => (
    <div className="my-3">
        <div className="flex items-center justify-center">
            <Typography className="text-[#063B66] font-bold text-2xl">
                Recent Activities
            </Typography>
        </div>
      <Card />
    </div>
)

export default RecentActivities
