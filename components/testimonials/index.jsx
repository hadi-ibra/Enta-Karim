// Import SwiperElement React components
// eslint-disable-next-line import/no-unresolved
import { SwiperSlide, Swiper } from 'swiper/react'
import { Typography } from '@mui/material'
import SwiperSlideItem from './SwiperSlide'
import mobileStyle from '../../styles/mobile.module.scss'
import { testimonials } from '../../constants/volunteerPage'
// Import SwiperElement styles
// eslint-disable-next-line import/no-unresolved
import 'swiper/css'
import 'swiper/css/pagination'

const Testimonials = () => (
  <div className={`bg-[#063B66] mb-5 ${mobileStyle.carouselSection} `}>
    <Typography
      className='text-[#eaeaea] font-bold text-2xl py-6'
    >
        Testimonials
    </Typography>
    <Swiper
      slidesPerView={1}
      spaceBetween={5}
      loop
      centeredSlides={true} 
      pagination={{
        "clickable": true,
      }}
    >
      {testimonials.map((element) => (
        <SwiperSlide key={element.id}>
          <SwiperSlideItem item={element} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
)
export default Testimonials
