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
      title: "TATA La VIDA",
      place: "Sector 113, Gurgaon",
      image: "/assets/images/project-1.jpg",
      link: "#",
    },
    {
      id: "project--2",
      title: "TATA La VIDA",
      place: "Sector 113, Gurgaon",
      image: "/assets/images/project-2.jpg",
      link: "#",
    },
    {
      id: "project--3",
      title: "TATA La VIDA",
      place: "Sector 113, Gurgaon",
      image: "/assets/images/project-3.jpg",
      link: "#",
    },
    {
      id: "project--4",
      title: "TATA La VIDA",
      place: "Sector 113, Gurgaon",
      image: "/assets/images/project-4.jpg",
      link: "#",
    },
    {
      id: "project--5",
      title: "TATA La VIDA",
      place: "Sector 113, Gurgaon",
      image: "/assets/images/project-5.jpg",
      link: "#",
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
              <SwiperSlide className={index > 2 ? 'hide-mobile' : ''} key={`projectList--${element.id}`}>
                <div className="propery-grid">
                  <div className="property-image">
                    <Image src={element.image} layout="fill" />
                  </div>
                  <div className="content">
                    <div>
                      <div className="name">{element.title}</div>
                      <div className="place">{element.place}</div>
                    </div>
                    <div className="button">
                      <Link href={element.link} >
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
