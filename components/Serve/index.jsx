// Import SwiperElement React components
// eslint-disable-next-line import/no-unresolved
import { SwiperSlide, Swiper } from "swiper/react";
import { Typography } from "@mui/material";
import SwiperSlideItem from "./SwiperSlide";
import mobileStyle from "../../styles/mobile.module.scss";
import { whatWeServe } from "../../constants/homePage";
// Import SwiperElement styles
// eslint-disable-next-line import/no-unresolved
import "swiper/css";

const MainSlider = () => (
  <div className={mobileStyle.carouselSection}>
    <Typography className="text-[#29C6D5] font-bold text-2xl">
      What we Serve
    </Typography>
    <Swiper
      slidesPerView={1}
      spaceBetween={-130}
      pagination={{
        clickable: true,
      }}
    >
      {whatWeServe.map((element) => (
        <SwiperSlide key={element.id}>
          <SwiperSlideItem item={element} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
export default MainSlider;
