import Image from "next/image";
import Section from "../UI/Section";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import Link from "next/link";

const FeaturedProjects = (props) => {
  const projectList = [
    {
      id: "project--1",
      title: "Tata Lavida",
      place: "Sector-113, Gurgaon",
      image: "/assets/images/tata-la-vida.jpg",
      link: "#",
      bhk: "2, 3 BHK",
      price: "₹ 1.20 Cr onwards",
    },
    {
      id: "project--2",
      title: "Sobha City",
      place: "Sector-108, Gurgaon",
      image: "/assets/images/sobha-city.jpg",
      link: "#",
      bhk: "2,3 BHK",
      price: "₹ 1.40 Cr onwards",
    },
    {
      id: "project--3",
      title: "Experion Windchants",
      place: "Sector-112, Gurgaon",
      image: "/assets/images/Experion-Windchants.jpg",
      link: "#",
      bhk: "2,3,4,5 BHK",
      price: "₹ 2.35 Cr onwards",
    },
    {
      id: "project--4",
      title: "Aradhya Homes",
      place: "Sector-67A, Gurgaon",
      image: "/assets/images/Aradhya-Homes.jpg",
      link: "#",
      bhk: "4 BHK Independent Floor",
      price: "₹ 1.72 Cr onwards",
    },
    {
      id: "project--5",
      title: "Whiteland Blissville",
      place: "Sector-76, Gurgaon",
      image: "/assets/images/whiteland-blissville.jpg",
      link: "#",
      bhk: "3 BHK",
      price: "₹ 1.25 Cr onwards",
    },
  ];

  return (
    <Section classes="featured-products" pageWidth="">
      <div className="section-head text-center">
        <h2>Featured Projects</h2>
        <p> Exclusive display of featured projects</p>
      </div>
      <div className="featured-products-slider">
        <div className="row">
          <Swiper
            //   loop={true}
            speed={1000}
            spaceBetween={30}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            slidesPerView={5}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 5,
              },
            }}
            modules={[Autoplay, Navigation]}
          >
            {projectList.map((element, index) => (
              <SwiperSlide
                className={index > 2 ? "hide-mobile" : ""}
                key={`projectList--${element.id}`}
              >
                <div className="propery-grid">
                  <div className="property-image">
                    <Image src={element.image} layout="fill" />
                  </div>
                  <div className="content">
                    <div>
                      <div className="name">{element.title}</div>
                      <div className="place">{element.place}</div>
                      <div className="info">
                        {element.bhk}
                        <br />
                        {element.price}
                      </div>
                    </div>
                    <div className="button">
                      <Link href={element.link}>
                        <a className="property-btn">
                          View Property
                          <svg
                            width="13"
                            height="12"
                            viewBox="0 0 13 12"
                            fill="none"
                          >
                            <path
                              d="M1.93896 6H11.9654"
                              stroke="#E7B554"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6.95215 1L11.9653 6L6.95215 11"
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
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Section>
  );
};

export default FeaturedProjects;
