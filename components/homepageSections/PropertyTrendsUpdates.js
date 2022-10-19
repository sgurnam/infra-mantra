import Image from "next/image";
import Section from "../UI/Section";

const PropertyTrendsUpdates = (props) => {
  const trendList = [
    {
      id: "trends--1",
      title: "4th Room Needed in Every Home",
      description: "Sep 16, 2022",
      image: "trends-1.jpg",
    },
    {
      id: "trends--2",
      title: "Tips to reduce Home Loan Interest Rates",
      description: "Sep 16, 2022",
      image: "trends-2.jpg",
    },
    {
      id: "trends--3",
      title: "Benefits of RERA for NRIs Property Buyers",
      description: "Sep 16, 2022",
      image: "trends-3.jpg",
    },
    {
      id: "trends--4",
      title: "Significance of colors according to Vastu",
      description: "Sep 16, 2022",
      image: "trends-4.jpg",
    },
    {
      id: "trends--5",
      title: "Why Is It The Right Time To Buy A Home",
      description: "Sep 16, 2022",
      image: "trends-5.jpg",
    },
    {
      id: "trends--6",
      title: "5 Things To Keep In Mind While Buying The Home",
      description: "Sep 16, 2022",
      image: "trends-6.jpg",
    },
  ];
  return (
    <Section classes="property-trends-section" pageWidth="container">
      <div className="section-head">
        <h2>Property Trends & Blogs</h2>
        <p>Get the latest updates and insights related to real estate</p>
      </div>
      <div className="property-trends-row">
        {trendList.map((element, index) => (
          <div className={`property-trends-grid ${index > 2 ? 'hide-mobile' : ''}`} key={element.id}>
            <div className="image">
              <Image src={`/assets/images/${element.image}`} layout="fill" />
            </div>
            <div className="content">
              <h5>{element.title}</h5>
              <p>{element.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="theme-btn-area">
        <a href="#" className="theme-btn">
          All Realty News & Articles
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
    </Section>
  );
};

export default PropertyTrendsUpdates;
