import Image from "next/image";
import Section from "./Section";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import SliderArrows from "./SliderArrows";

const MainBanner = (props) => {

  // const [activeState, setActiveState] = useState(true)

  const items = props.items;
  const localities = [
    "Dwarka",
    "Uttam Nagar",
    "Punjabi Bagh",
    "Rohini",
    "Majnu ka Tilla",
    "Janakpuri",
  ];

  return (
    <Section classes="main-banner-section" pageWidth="fluid">
      {items.length > 1 ? (
        <Swiper
          loop={true}
          speed={1000}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[ Autoplay]}
        >
          {items.map((item, index) => (
            <SwiperSlide key={item.files._id}>
              <div className="image">
                <Image src={item.image} alt="Homepage Banner" layout="fill" />
              </div>
              <div className="banner-content">
                <div className="page-width">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="main-banner-single">
          <div className="image">
            <Image src={items[0].image} alt="Homepage Banner" layout="fill" />
          </div>
          <div className="banner-content">
            <div className="page-width">
              <h1>{items[0].title}</h1>
              <p>{items[0].description}</p>
            </div>
            <div className="search-area">
              <div className="filter-head">
                <div className="filter active">Residential</div>
                <div className="filter">Commercial</div>
                <div className="filter">Plots</div>
              </div>
              <div className="filter-search">
                <div className="search-dropdown-inner">
                  <select>
                    <option value="Gurgaon">Gurgaon</option>
                    <option value="Noida">Noida</option>
                    <option value="Delhi">Delhi</option>
                  </select>
                </div>
                <div className="searchbar-inner">
                  <input
                    type="search"
                    className="form-input"
                    placeholder="Search for locality, landmark, projects or builder"
                  />
                </div>
                <div className="search-icon">
                  <div className="searchbar-icon">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.7498 15.75L12.4873 12.4875"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="filter-localities">
                <div className="label">Popular Localities</div>
                <div className="localities-list">
                  <div className="localities-arrow-left">
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                      <path
                        d="M5 9L1 5L5 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <Swiper
                    speed={800}
                    slidesPerView="auto"
                    modules={[Navigation]}
                    navigation={{
                      nextEl: ".localities-arrow-right",
                      prevEl: ".localities-arrow-left",
                    }}
                  >
                    {localities.map((item, index) => (
                      <SwiperSlide key={"localities" + localities[index]}>
                        <div className="locality-inner">
                          <div className="locality">{localities[index]}</div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="localities-arrow-right">
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                    >
                      <path
                        d="M1 9L5 5L1 1"
                        stroke="white"
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
        </div>
      )}
    </Section>
  );
};

export default MainBanner;
