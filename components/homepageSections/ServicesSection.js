import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import Link from "next/link";

const ServicesSection = (props) => {
  const serviceList = [
    {
      id: "service--1",
      title: "Property Buying",
      description: "We make buying a property just as easy as going out for shopping",
      image: "Property-Buying.png",
      url: "#",
    },
    {
      id: "service--2",
      title: "Home Loans ",
      description: "Backing out because of endless hassle of applying for a home loan?  Well let us handle that, we provide Home loan facilitation through major banks across India.",
      image: "Home-Loans.webp",
      url: "#",
    },
    {
      id: "service--3",
      title: "Home Interiors ",
      description: "Hire professional interior decorators and get the feeling of being at Home",
      image: "Home-Interiors.webp",
      url: "#",
    },
    {
      id: "service--4",
      title: "Property Management Services",
      description: "We work closely with the owners assisting them in liquidating or generating rental yields from their assets",
      image: "Property-management-services.png",
      url: "#",
    },
  ];
  return (
    <section className="infra-section services-section">
      <div className="page-width container">
        <div className="section-head">
          <h2>Services</h2>
          <p>One stop destination for all property-related services</p>
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
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3.5,
            },
          }}
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
