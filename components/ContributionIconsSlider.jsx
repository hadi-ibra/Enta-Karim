import React from 'react'
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react'
import mobileStyle from '../styles/mobile.module.scss'
import { projects } from '../constants/homePage'

const ContributionIconsSlider = () => (
    <div className={`${mobileStyle.carouselSection} my-4 mx-3`}>
      <Swiper
        slidesPerView={2}
        spaceBetween={4}
        loop
        pagination={{
          clickable: true,
        }}
      >
        {projects.map(({ img, value, title }, index) => (
          <SwiperSlide key={index}>
             <div className="flex flex-col justify-center items-center">
               <div className="rounded-full w-[80px] border-2 p-4 border-[#09BECF]">
                 <div className={mobileStyle.serveImg}>
                   <img
                     src={img}
                     alt=""
                   />
                 </div>
               </div>
               <p className="text-lg font-semibold mt-2">{value}</p>
               <p className="text-md text-[#09BECF] mt-1">{title}</p>
             </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
)

export default ContributionIconsSlider
