// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react'
import CardItem from './CardItem'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css'

const CardList = ({ items }) => (
  <div className="ml-7">
    <Swiper
      slidesPerView={2}
      spaceBetween={200}
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
        />
        </SwiperSlide>
      ),
    )}
    </Swiper>

  </div>
)

export default CardList
