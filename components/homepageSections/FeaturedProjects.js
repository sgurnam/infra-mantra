import Image from "next/image";
import Section from "../UI/Section";

const FeaturedProjects = (props) => {
  return (
    <Section classes="featured-products" pageWidth="">
      <div className="section-head text-center">
        <h2>Featured Projects</h2>
        <p> Exclusive display of featured projects</p>
      </div>
      <div className="featured-products-slider">
        <div className="row">
          <div className="propery-grid">
            <div className="property-image">
              <Image src="/assets/images/project-1.jpg" layout="fill" />
            </div>
            <div className="content">
              <div>
                <div className="name">TATA La VIDA</div>
                <div className="place">Sector 113, Gurgaon</div>
              </div>
              <div className="button">
                <button className="property-btn">
                  View Property
                  <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
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
                </button>
              </div>
            </div>
          </div>
          <div className="propery-grid">
            <div className="property-image">
              <Image src="/assets/images/project-2.jpg" layout="fill" />
            </div>
            <div className="content">
              <div>
                <div className="name">TATA La VIDA</div>
                <div className="place">Sector 113, Gurgaon</div>
              </div>
              <div className="button">
                <button className="property-btn">
                  View Property
                  <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
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
                </button>
              </div>
            </div>
          </div>
          <div className="propery-grid">
            <div className="property-image">
              <Image src="/assets/images/project-3.jpg" layout="fill" />
            </div>
            <div className="content">
              <div>
                <div className="name">TATA La VIDA</div>
                <div className="place">Sector 113, Gurgaon</div>
              </div>
              <div className="button">
                <button className="property-btn">
                  View Property
                  <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
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
                </button>
              </div>
            </div>
          </div>
          <div className="propery-grid">
            <div className="property-image">
              <Image src="/assets/images/project-4.jpg" layout="fill" />
            </div>
            <div className="content">
              <div>
                <div className="name">TATA La VIDA</div>
                <div className="place">Sector 113, Gurgaon</div>
              </div>
              <div className="button">
                <button className="property-btn">
                  View Property
                  <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
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
                </button>
              </div>
            </div>
          </div>
          <div className="propery-grid">
            <div className="property-image">
              <Image src="/assets/images/project-5.jpg" layout="fill" />
            </div>
            <div className="content">
              <div>
                <div className="name">TATA La VIDA</div>
                <div className="place">Sector 113, Gurgaon</div>
              </div>
              <div className="button">
                <button className="property-btn">
                  View Property
                  <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FeaturedProjects;
