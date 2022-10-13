import Image from "next/image";
import Section from "../UI/Section";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import Link from "next/link";
import SliderArrows from "../UI/SliderArrows";

const OurPartners = (props) => {
  const partnersList = [
    {
      id: "partners--1",
      image: "partner-1.png",
      url: "#",
    },
    {
      id: "partners--2",
      image: "partner-2.png",
      url: "#",
    },
    {
      id: "partners--3",
      image: "partner-3.png",
      url: "#",
    },
    {
      id: "partners--4",
      image: "partner-4.png",
      url: "#",
    },
    {
      id: "partners--5",
      image: "partner-5.png",
      url: "#",
    },
    {
      id: "partners--6",
      image: "partner-2.png",
      url: "#",
    },
    {
      id: "partners--7",
      image: "partner-3.png",
      url: "#",
    },
  ];
  return (
    <Section classes="partners-section" pageWidth="container">
      <div className="section-head split-head">
        <div className="head">
            <h2>Our Partners</h2>
            <p>We are working with Top Builders and Developers across India</p>
        </div>
        <div className="arrows">
            <SliderArrows prevClass="partners-left" nextClass="partners-right"/>
        </div>
      </div>
      <div className="partners-grids-row">
        <Swiper
        //   loop={true}
          speed={1000}
          spaceBetween={30}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          navigation={{ nextEl: "#partners-right", prevEl: "#partners-left" }}
          slidesPerView={5}
          breakpoints={{
              // when window width is >= 640px
              320: {
                width: 640,
                slidesPerView: 2,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 5,
              },
            }}
          modules={[Autoplay, Navigation]}
        >
          {partnersList.map((element) => (
            <SwiperSlide key={`partnersListt--${element.id}`}>
              <div className="partners-grid">
                <div className="overlay-image">
                  <Image
                    src={`/assets/images/${element.image}`}
                    layout="fill"
                  />
                </div>
                <div className="image">
                  <Image
                    src={`/assets/images/${element.image}`}
                    layout="fill"
                  />
                </div>
                <div className="content">
                  <Link href={element.url}>
                    <a>
                      View Properties
                      <svg
                        width="13"
                        height="12"
                        viewBox="0 0 13 12"
                        fill="none"
                      >
                        <path
                          d="M1.28223 6H11.3086"
                          stroke="#E7B554"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.29541 1L11.3086 6L6.29541 11"
                          stroke="#E7B554"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
};

export default OurPartners;
