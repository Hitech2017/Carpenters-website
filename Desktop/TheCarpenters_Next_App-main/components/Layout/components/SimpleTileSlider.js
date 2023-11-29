import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./SimpleTileSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";

const tileSlider = ({ tiles }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={20}
      slidesPerView={3}
      pagination={{ clickable: true }}
      navigation
      loop={true}
      autoplay={{ delay: 4000 }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      centeredSlides={true}
    >
      {tiles.map((info, index) => (
        <SwiperSlide key={index}>
          <div className={styles.tile_slider_desc}>{info.desc}</div>
          <Image
            className={styles.tile_slider_image}
            src={info.path}
            key={info.key}
            width={300}
            height={300}
          ></Image>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default tileSlider;
