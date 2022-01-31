// eslint-disable-next-line import/no-unresolved
import { SwiperSlide, Swiper } from 'swiper/react'
import { Typography } from '@mui/material'
import SwiperSlideItem from './SwiperSlide'
import mobileStyle from '../../styles/mobile.module.scss'
import { beneficiaries } from '../../constants/contributionPage'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css'

const MainSlider = () => (
  <div className={mobileStyle.carouselSection}>
    <Typography
      className="text-[#063B66] font-bold text-2xl"
    >
        Beneficiaries
    </Typography>
    <Swiper
      slidesPerView={1}
      spaceBetween={-130}
      pagination={{
        clickable: true,
      }}
    >
      {beneficiaries.map((element) => (
        <SwiperSlide key={element.id}>
          <SwiperSlideItem item={element} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
)
export default MainSlider
