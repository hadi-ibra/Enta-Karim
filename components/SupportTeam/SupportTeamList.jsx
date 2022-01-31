import 'swiper/css'
import SupportTeamItem from './SupportTeamItem'
import { Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'

const SupportTeamList = ({items}) => (
  <div className="pb-8">
    <Typography className='font-black pt-8 pb-3 text-center text-2xl text-[#063B66]'>Our Support Team</Typography>
    <Swiper
      slidesPerView={2}
      spaceBetween={0}
      loop
      pagination = {{
        clickable: true,
        type: 'bullets',
        bulletElement: 'span',
        bulletClass: 'timeline-icon',
        bulletActiveClass: 'timeline-icon-active',
      }}
      style={{
        padding:"5% !important"
      }}
    >
      {items.map(
        item => (
          <SwiperSlide key={item.id}>
            <SupportTeamItem
              image={item.image}
              name={item.name}
            />
          </SwiperSlide>
        ),
      )}
    </Swiper>
  </div>
)


export default SupportTeamList
