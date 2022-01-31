import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import CardItem from './CardItem'
import { Typography } from '@mui/material'

const List = ({items,title,displayButton}) => {
  return (
    <div className='my-8 h-[30rem]  bg-[#EAEAEA]'>
      <Typography className='font-black text-center pb-0 text-2xl pb text-[#063B66]  pt-4'>{title}</Typography>
      <Swiper
        slidesPerView={1}
        loop
        pagination={{
          clickable: true,
        }}
      >
        {items.map(
          item => (
            <SwiperSlide key={item.id}>
              <CardItem
                image={item.image}
                text={item.text}
                name={item.name}
                displayButton={displayButton}
              />
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </div>
  )
}

export default List
