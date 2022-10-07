import Image from "next/image";
import Section from "../UI/Section";

const TopLocalities = (props) => {
  return (
    <Section classes="top-localities-section" pageWidth="container">
      <div className="section-head split-head">
        <h2>Top Localities</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="top-localities-row">
        <div className="top-locality-area">
          <div className="top-locality-category">
            <li></li>
          </div>
          <div className="top-locality-area-list"></div>
          <div className="top-locality-map"></div>
        </div>
      </div>
    </Section>
  );
};

export default InfraRecommendationsSection;
