import mobileStyle from '../../styles/mobile.module.scss'
import { Typography } from '@mui/material'
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import MissionItem from './MissionItem'

const Mission = ({items}) => (
  <div className='pl-9'>
    <Swiper
      slidesPerView={2}
      spaceBetween={100}
      pagination={{
        clickable: true,
      }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <MissionItem
            image={item.image}
            title={item.title}
            text={item.text}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
)

export default Mission
