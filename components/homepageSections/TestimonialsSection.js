import Image from "next/image";
import Section from "../UI/Section";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/css";

const TestimonialsSection = (props) => {
  const testimonialsList = [
    {
      id: "testimonial--1",
      title:
        "INFRAMANTRA, Making Realty A Reality For You…true to their name reflect their commitment to the vision of their client..they are authentic genuine and honest in their dealing….their clarity ensures that you do not end up wasting your time on futile trips in your property search….last but not the least, they are professional and Heartful in good measure. My Good wishes to them.",
      name: "Maloy Dey & Shudatta Gosh",
      designation: "Owner BPTP Noida",
      image: "https://www.youtube.com/embed/QgfzVCo38hk",
    },
    {
      id: "testimonial--2",
      title:
        "My last experience with a brokering agent was not good, and I was a bit skeptical about this deal too but, after meeting team Inframantra, I got the confidence, and indeed it was a pleasure working with INFRAMANTRA. For me, team INFRAMANTRA has been extremely helpful.",
      name: "Mr. Shubham Gupta",
      designation: "Owner BPTP Noida",
      image: "https://www.youtube.com/embed/QgfzVCo38hk",
    },
  ];
  return (
    <Section classes="testimonials-section" pageWidth="container">
      <div className="section-head">
        <h2>Testimonials</h2>
        <p>Look what our clients feel about us</p>
      </div>
      <div className="testimonials-grids-row">
        <Swiper
          loop={true}
          speed={1000}
          spaceBetween={30}
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          // pagination={true}
          pagination={{ clickable: true }}
        >
          {testimonialsList.map((element) => (
            <SwiperSlide key={element.id}>
              <div className="testimonial-grid">
                <div className="content">
                  <h5>{element.title}</h5>
                  <p className="name">{element.name}</p>
                  <p className="designation">{element.designation}</p>
                  <svg width="31" height="23" viewBox="0 0 31 23" fill="none">
                    <path
                      d="M6.6 23C4.78667 23 3.37333 22.44 2.36 21.32C1.34667 20.2 0.84 18.7067 0.84 16.84C0.84 14.8133 1.37333 12.4933 2.44 9.88C3.56 7.21333 5.10667 4.12 7.08 0.599997H13.8V1.08C12.6267 3.05333 11.56 4.97333 10.6 6.84C9.64 8.65333 8.78667 10.44 8.04 12.2C9.26667 12.52 10.28 13.1333 11.08 14.04C11.9333 14.8933 12.36 16.0933 12.36 17.64C12.36 19.24 11.8533 20.5467 10.84 21.56C9.88 22.52 8.46667 23 6.6 23ZM23.4 23C21.5867 23 20.1733 22.44 19.16 21.32C18.1467 20.2 17.64 18.7067 17.64 16.84C17.64 14.8133 18.1733 12.4933 19.24 9.88C20.36 7.21333 21.9067 4.12 23.88 0.599997H30.6V1.08C29.4267 3.05333 28.36 4.97333 27.4 6.84C26.44 8.65333 25.5867 10.44 24.84 12.2C26.0667 12.52 27.08 13.1333 27.88 14.04C28.7333 14.8933 29.16 16.0933 29.16 17.64C29.16 19.24 28.6533 20.5467 27.64 21.56C26.68 22.52 25.2667 23 23.4 23Z"
                      fill="#7C7C7C"
                    />
                  </svg>
                </div>
                <div className="iframe">
                  <iframe
                    width="560"
                    height="315"
                    src={element.image}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <svg
          width="661"
          height="158"
          viewBox="0 0 661 158"
          fill="none"
        >
          <mask
            id="mask0_560_6"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="661"
            height="158"
          >
            <rect width="661" height="157.455" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_560_6)">
            <g opacity="0.3">
              <g clipPath="url(#clip0_560_6)">
                <path
                  d="M113.057 176.993L156.527 222.784L276.397 107.413L707.021 246.168V181.471L258.607 37.423L258.568 37.5982L258.22 37.2672L113.057 176.993Z"
                  fill="url(#paint0_linear_560_6)"
                />
              </g>
              <path
                d="M102.5 153.5L237 153.5L398.5 153.5L251.848 -3.11795L102.5 153.5Z"
                fill="url(#paint1_linear_560_6)"
              />
            </g>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_560_6"
              x1="663.371"
              y1="130.016"
              x2="113.057"
              y2="130.016"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F2D874" />
              <stop offset="0.01" stopColor="#F0D571" />
              <stop offset="0.15" stopColor="#DCB74E" />
              <stop offset="0.27" stopColor="#D0A438" />
              <stop offset="0.35" stopColor="#CB9D30" />
              <stop offset="0.43" stopColor="#CDA034" />
              <stop offset="0.52" stopColor="#D4AB3F" />
              <stop offset="0.6" stopColor="#DFBC53" />
              <stop offset="0.68" stopColor="#EED46E" />
              <stop offset="0.71" stopColor="#F5DF7B" />
              <stop offset="0.78" stopColor="#E8CC67" />
              <stop offset="1" stopColor="#C3972F" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_560_6"
              x1="239.194"
              y1="264.122"
              x2="365.452"
              y2="136.513"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0_560_6">
              <rect
                width="526.929"
                height="185.517"
                fill="white"
                transform="matrix(-1 0 0 1 640.733 37.415)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </Section>
  );
};

export default TestimonialsSection;
