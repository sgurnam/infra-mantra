import Image from "next/image";
import Section from "../UI/Section";

const TopLocalities = (props) => {
  return (
    <Section classes="top-localities-section" pageWidth="container">
      <div className="section-head">
        <h2>Top Localities</h2>
        <p>See the top trending localities in Gurgaon</p>
      </div>
      <div className="top-localities-row">
        <div className="top-locality-category">
          <li>
            <div className="icon">
              <Image src="/assets/images/locality-icon-1.png" layout="fill" />
            </div>
            Popular
          </li>
          <li className="active">
            <div className="icon">
              <Image src="/assets/images/locality-icon-2.png" layout="fill" />
            </div>
            Investment Hotspot
          </li>
          {/* <li>
            <div className="icon">
              <Image src="/assets/images/locality-icon-3.png" layout="fill" />
            </div>
            Affordable
          </li> */}
          <li>
            <div className="icon">
              <Image src="/assets/images/locality-icon-4.png" layout="fill" />
            </div>
            Great Lifestyle
          </li>
        </div>
        <div className="top-locality-area">
          <div className="top-locality-area-list">
            <li>
              Paschim Vih... <strong>₹13.3 K/ sq.ft</strong>
            </li>
            <li>
              Sector 43 <strong>₹18.6 K/ sq.ft</strong>
            </li>
            <li>
              Janakpuri <strong>₹14.5 K/ sq.ft</strong>
            </li>
            <li>
              Vikaspuri <strong>₹36.8 K/ sq.ft</strong>
            </li>
            <li>
              Adchini <strong>₹21.5 K/ sq.ft</strong>
            </li>
            <li>
              Vasant Vihar <strong>₹31.3 K/ sq.ft</strong>
            </li>
          </div>
          <div className="top-locality-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224568.15030524903!2d76.9897491!3d28.42295755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1665139707580!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TopLocalities;
