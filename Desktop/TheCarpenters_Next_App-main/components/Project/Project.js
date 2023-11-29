import Image from "next/image";
import styles from "./Project.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import Modal from "react-modal";

function ProjectImage({ image_url, handleShow }) {
  return (
    <div className={styles.project_img_wrapper}>
      <div className={styles.img_overlay} onClick={(e) => handleShow(e)}>
        <i className="fa-solid fa-expand"></i>
      </div>
      <Image src={image_url} width={400} height={400} />
    </div>
  );
}

function ProjectFullImage({ image_url }) {
  return (
    <div className={styles.project_img_wrapper_modal}>
      <Image src={image_url} width={600} height={600} />
    </div>
  );
}

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#000",
    zIndex: 10000,
    borderStyle: "none",
  },
  content: {
    inset: 0,
    padding: 0,
    backgroundColor: "none",
    width: "100%",
    height: "100%",
    borderStyle: "none",
  },
};

Modal.setAppElement("#root");

// Individual project sections:
function Project({ title, area, description, loc, images }) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className={styles.project_card}>
      <h1 className="title">
        {title} <span>{area}</span>
      </h1>
      <div className={styles.project_description}>
        <p>{description}</p>
        {loc?(<p>
          <span>
            <i className="fa-solid fa-location-dot"></i>
          </span>
          {loc}
        </p>):null}
        {/* <p>
          <span>
            <i className="fa-solid fa-location-dot"></i>
          </span>
          {loc}
        </p> */}
      </div>
      <div>
        {/* Swiper js */}
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
          {images.map((ig, index) => (
            <SwiperSlide key={index}>
              <ProjectImage
                image_url={ig}
                key={index}
                handleShow={handleShow}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Modal
        isOpen={show}
        onRequestClose={handleClose}
        style={customStyles}
        contentLabel="Project gallery"
      >
        <div className={styles.modal_wrapper}>
          <div className={styles.modal_close} onClick={handleClose}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div className={styles.swiper_modal}>
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={0}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              loop={true}
              autoplay={{ delay: 4000 }}
              centeredSlides={true}
              className={styles.mySwiper}
            >
              {images.map((ig, index) => (
                <SwiperSlide key={index}>
                  <ProjectFullImage image_url={ig} key={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Project;
