import Image from "next/image";

const ListingGrid = (props) => {
  return (
    <div className="listing-grid">
      <div className="image">
        <Image src={props.image} layout="fill" />
        <div className="logo">
          <Image src={props.logo} layout="fill" />
        </div>
      </div>
      <div className="content">
        <div className="content-info">
          <div className="name">{props.name}</div>
          <div className="sector">Sector 63A, Gurgaon</div>
          <div className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="type-price">
            <div>
              <div className="label">Type</div>
              <div className="info">2BHK / 3BHK</div>
            </div>
            <div>
              <div className="label">Avg. price</div>
              <div className="info">₹6k /sq.ft.</div>
            </div>
          </div>
          <div className="button">
            <div className="theme-btn">
              Learn More
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
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
        <div className="content-price">
            <div className="price">₹1.16 Cr - 2.01 Cr</div>
            <div className="amenities">
                <div className="image">
                    <Image src="/assets/images/amenities-1.jpg" layout="fill" />
                </div>
                <div className="image">
                    <Image src="/assets/images/amenities-2.jpg" layout="fill" />
                </div>
                <div className="image">
                    <Image src="/assets/images/amenities-3.jpg" layout="fill" />
                </div>
                <div className="image">
                    <Image src="/assets/images/amenities-4.jpg" layout="fill" />
                </div>
                <div className="image">
                    <Image src="/assets/images/amenities-1.jpg" layout="fill" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ListingGrid;
