import Image from "next/image";
import Section from "../UI/Section";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";

const TestimonialsSection = (props) => {
  const testimonialsList = [
    {
      id: "testimonial--1",
      title: "I want to thank my RM for her support in closing the deal with a prospect from 99 Acres, We are very happy to say that you are very helpful in closing this lead and deal. We appreciate your efforts in doing so.",
      name: "Lorem Ipsum is simply dummy text.",
      designation: "Lorem Ipsum is simply dummy text.",
      image: "<iframe width='560' height='315' src='https://www.youtube.com/embed/8LSt8_11wbQ' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
    },
    {
      id: "testimonial--2",
      title: "I want to thank my RM for her support in closing the deal with a prospect from 99 Acres, We are very happy to say that you are very helpful in closing this lead and deal. We appreciate your efforts in doing so.",
      name: "Lorem Ipsum is simply dummy text.",
      designation: "Lorem Ipsum is simply dummy text.",
      image: "<iframe width='560' height='315' src='https://www.youtube.com/embed/8LSt8_11wbQ' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
    },
    {
      id: "testimonial--3",
      title: "I want to thank my RM for her support in closing the deal with a prospect from 99 Acres, We are very happy to say that you are very helpful in closing this lead and deal. We appreciate your efforts in doing so.",
      name: "Lorem Ipsum is simply dummy text.",
      designation: "Lorem Ipsum is simply dummy text.",
      image: "<iframe width='560' height='315' src='https://www.youtube.com/embed/8LSt8_11wbQ' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
    },
  ];
  return (
    <Section classes="testimonials-section" pageWidth="container">
      <div className="section-head">
        <h2>Testimonials</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>
      <div className="testimonials-grids-row">
        <Swiper
          loop={true}
          onSwiper={(swiper) => console.log(swiper)}
          speed={1000}
          spaceBetween={30}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView={4}
          modules={[Autoplay]}
        >
          {testimonialsList.map((element) => (
            <SwiperSlide key={element.id}>
              <div className="testimonial-grid">
                <div className="image">
                  <Image
                    src={`/assets/images/${element.image}`}
                    layout="fill"
                  />
                </div>
                <div className="content">
                  <h5>{element.title}</h5>
                  <p>{element.designation}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
};

export default TestimonialsSection;
