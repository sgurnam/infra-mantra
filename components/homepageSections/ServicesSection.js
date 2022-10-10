import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import Link from "next/link";

const ServicesSection = (props) => {
  const serviceList = [
    {
      id: "service--1",
      title: "Independent House",
      description: "Lorem Ipsum is simply dummy text of the printing industry.",
      image: "service-1.png",
      url: "#",
    },
    {
      id: "service--2",
      title: "Studio",
      description: "Lorem Ipsum is simply dummy text of the printing industry.",
      image: "service-2.png",
      url: "#",
    },
    {
      id: "service--3",
      title: "Townships",
      description: "Lorem Ipsum is simply dummy text of the printing industry.",
      image: "service-3.png",
      url: "#",
    },
    {
      id: "service--4",
      title: "Affordable Homes",
      description: "Lorem Ipsum is simply dummy text of the printing industry.",
      image: "service-4.png",
      url: "#",
    },
  ];
  return (
    <section className="infra-section services-section">
      <div className="page-width container">
        <div className="section-head">
          <h2>Services</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and
            <br />
            typesetting industry.
          </p>
        </div>
      </div>

      <div className="services-grids-row">
        <Swiper
          loop={true}
          speed={1000}
          spaceBetween={30}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          slidesPerView={3.5}
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
                  <Link href={element.url}>
                    <a>
                      Learn More
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
    </section>
  );
};

export default ServicesSection;
