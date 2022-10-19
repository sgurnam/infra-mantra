import Image from "next/image";
import Section from "../UI/Section";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import Link from "next/link";
import SliderArrows from "../UI/SliderArrows";
import FloatingContactForm from "../UI/FloatingContactForm";
import { useState } from "react";

const InfraRecommendationsSection = (props) => {
  const [openContactForm, setOpenContactForm] = useState(false);

  const openFormHandler = (formHandler) => {
    // formHandler.preventDefault();
    openContactForm ? setOpenContactForm(false) : setOpenContactForm(true);
  };

  const infraList = [
    {
      id: "infra-recommend-1",
      title: "Tulip Monsella",
      heroImage: "Tulip-Monsella.jpg",
      projectInfoList: [
        "30+ years of experience in construction, real estate and development.",
        "RERA Certified",
        "1 minute drive from rapid metro station.",
      ],
      amenitiesList: [
        {
          title: "Security Camera",
          icon: "amenities-1.jpg",
        },
        {
          title: "Community Hall",
          icon: "amenities-2.jpg",
        },
        {
          title: "Swimming Pool",
          icon: "amenities-3.jpg",
        },
        {
          title: "Playground & Park",
          icon: "amenities-4.jpg",
        },
      ],
      builderIcon: "tulip-monsella-logo.jpg",
      location: "Golf Course Road, Sector-53, Gurgaon",
      apartments: "3, 4, 5 BHK",
      price: "₹ 5.74 Cr onwards",
      url: "#",
    },
    {
      id: "infra-recommend-1",
      title: "Saan Verdante",
      heroImage: "Saan-verdante.jpg",
      projectInfoList: [
        "20+ years of experience in real estate industry.",
        "RERA Certified",
        "10 minutes’ drive from NH 48 and Dwarka Expressway.",
      ],
      amenitiesList: [
        {
          title: "Security Camera",
          icon: "amenities-1.jpg",
        },
        {
          title: "Community Hall",
          icon: "amenities-2.jpg",
        },
        {
          title: "Swimming Pool",
          icon: "amenities-3.jpg",
        },
        {
          title: "Playground & Park",
          icon: "amenities-4.jpg",
        },
      ],
      builderIcon: "Saan-verdante-logo.png",
      location: "Sector-95, Gurgaon",
      apartments: "3, 4 BHK",
      price: "₹ 1.57 Cr onwards",
      url: "#",
    },
  ];
  return (
    <>
      <Section classes="infra-recommend-section" pageWidth="container">
        <div className="section-head split-head">
          <div className="head">
            <h2>Inframantra Recommendations</h2>
            <p>List of top recommended properties for you</p>
          </div>
          <div className="arrows">
            <SliderArrows
              prevclassName="infra-recommend-left"
              nextclassName="infra-recommend-right"
            />
          </div>
        </div>
        <div className="infra-recommend-row">
          <Swiper
            //   loop={true}
            speed={1000}
            spaceBetween={30}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            navigation={{
              nextEl: "#infra-recommend-right",
              prevEl: "#infra-recommend-left",
            }}
            modules={[Autoplay, Navigation]}
          >
            {infraList.map((element, index) => (
              <SwiperSlide key={`infraListt--${index}`}>
                <div className="infra-recommend-card">
                  <div className="image">
                    <Image
                      src={`/assets/images/${element.heroImage}`}
                      layout="fill"
                    />
                  </div>
                  <div className="content">
                    <h2 className="property-title">{element.title}</h2>
                    <div className="propety-list">
                      {element.projectInfoList.map((list, index) => (
                        <li key={`projectInfoList-${index}`}>
                          <div className="icon">
                            <svg
                              width="26"
                              height="10"
                              viewBox="0 0 26 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_560_267)">
                                <path
                                  d="M3.76807 10L3.76807 0.042511L0.000155449 0.042511L0.000155449 10H3.76807Z"
                                  fill="#CDA134"
                                />
                                <path
                                  d="M17.6024 7.93084H12.2725L8.18826 3.81236V9.95324H4.41895V0.0141754L8.18826 0.0155926L9.75026 0.0170099L17.6024 7.93084Z"
                                  fill="url(#paint0_linear_560_267)"
                                />
                                <path
                                  d="M20.697 9.94756L10.854 0.0255102L16.1572 0L26.0016 9.92205L20.697 9.94756Z"
                                  fill="url(#paint1_linear_560_267)"
                                />
                              </g>
                              <defs>
                                <linearGradient
                                  id="paint0_linear_560_267"
                                  x1="4.41895"
                                  y1="4.983"
                                  x2="17.6024"
                                  y2="4.983"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#D5AB3F" />
                                  <stop offset="0.21" stopColor="#D7AE43" />
                                  <stop offset="0.41" stopColor="#DDB84E" />
                                  <stop offset="0.61" stopColor="#E8C962" />
                                  <stop offset="0.8" stopColor="#F5DF7B" />
                                </linearGradient>
                                <linearGradient
                                  id="paint1_linear_560_267"
                                  x1="10.854"
                                  y1="4.97449"
                                  x2="26.0002"
                                  y2="4.97449"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#CB9D30" />
                                  <stop offset="0.01" stopColor="#CDA034" />
                                  <stop offset="0.06" stopColor="#DBB54C" />
                                  <stop offset="0.12" stopColor="#E5C55E" />
                                  <stop offset="0.19" stopColor="#ECD06B" />
                                  <stop offset="0.28" stopColor="#F1D773" />
                                  <stop offset="0.47" stopColor="#F2D975" />
                                  <stop offset="0.57" stopColor="#E9CC67" />
                                  <stop offset="1" stopColor="#C3972F" />
                                </linearGradient>
                                <clipPath id="clip0_560_267">
                                  <rect width="26" height="10" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          {list}
                        </li>
                      ))}
                    </div>
                    <div className="amenities-area">
                      <div className="amenities-label">Amenities</div>
                      {element.amenitiesList.map((amenity, index) => (
                        <li key={`amenitiesList-${index}`}>
                          <div className="icon">
                            <Image
                              src={`/assets/images/${amenity.icon}`}
                              layout="fill"
                            />
                          </div>
                          <div className="text">{amenity.title}</div>
                        </li>
                      ))}
                    </div>
                    <div className="button">
                      <a href="#" className="theme-btn">
                        Learn more
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M1 6H11"
                            stroke="#E7B554"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6 1L11 6L6 11"
                            stroke="#E7B554"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="property-strip">
                    <div className="propert-info-area">
                      <div className="propert-info">
                        <div className="label">Builder</div>
                        <div className="image">
                          <Image
                            src={`/assets/images/${element.builderIcon}`}
                            layout="fill"
                          />
                        </div>
                      </div>

                      <div className="propert-info">
                        <div className="label">Location</div>
                        <div className="text">{element.location}</div>
                      </div>

                      <div className="propert-info">
                        <div className="label">Apartments</div>
                        <div className="text">{element.apartments}</div>
                      </div>

                      <div className="propert-info">
                        <div className="label">Price</div>
                        <div className="text">₹ {element.price} onwards</div>
                      </div>
                      <div className="property-btn">
                        <div className="theme-btn" onClick={openFormHandler}>
                          Get In Touch
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                          >
                            <path
                              d="M1 6H11"
                              stroke="#E7B554"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6 1L11 6L6 11"
                              stroke="#E7B554"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Section>
      {openContactForm && (
        <FloatingContactForm
          onOpen={openFormHandler}
          heading="Get In Touch"
          type="getIntouch"
        />
      )}
    </>
  );
};

export default InfraRecommendationsSection;
