import Image from "next/image";
import Section from "../UI/Section";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";

const ServicesSection = (props) => {
  const serviceList = [
    {
      id: "service--1",
      title: "Independent House",
      description: "Lorem Ipsum is simply dummy text.",
      image: "service-1.png",
      url: "#",
    },
    {
      id: "service--2",
      title: "Studio",
      description: "Lorem Ipsum is simply dummy text.",
      image: "service-2.png",
      url: "#",
    },
    {
      id: "service--3",
      title: "Townships",
      description: "Lorem Ipsum is simply dummy text.",
      image: "service-3.png",
      url: "#",
    },
    {
      id: "service--4",
      title: "Affordable Homes",
      description: "Lorem Ipsum is simply dummy text.",
      image: "service-4.png",
      url: "#",
    },
  ];
  return (
    <Section classes="services-section" pageWidth="container">
      <div className="section-head">
        <h2>Services</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and
          <br />
          typesetting industry.
        </p>
      </div>
      <div className="services-grids-row">
        <Swiper
          loop={true}
          speed={1000}
          spaceBetween={30}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView={4}
          modules={[Autoplay]}
        >
          {serviceList.map((element) => (
            <SwiperSlide key={element.id}>
              <div className="service-grid">
                <div className="image">
                  <Image
                    src={`/assets/images/${element.image}`}
                    layout="fill"
                  />
                </div>
                <div className="content">
                  <h5>{element.title}</h5>
                  <p>{element.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
};

export default ServicesSection;
