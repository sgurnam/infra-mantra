import Section from "../UI/Section";
import DetailEnquiryForm from "./DetailEnquiryForm";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";


const ProjectDetail = (props) => {
    return(
        <Section classes="project-detail" pageWidth="container">
            <div className="project-top-info">
                <div className="logo-wrap">
                    <Image src="/assets/images/listing-grid-logo-1.jpg" alt="" layout="fixed" objectFit="contain" objectPosition="center" width="100" height="57" />
                </div>
                <div className="title-wrap">
                    <h1>Birla Navya Residential Homes</h1>
                    <p>Sector 63A, Gurgaon</p>
                </div>
                <div className="prj-price">
                    <h2>₹1.16 Cr - 2.01 Cr</h2>

                    <div className="extra-icons">
                        <a href="#">
                        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm12 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-9.41-8.49 6.83 3.98m-.01-10.98L6.59 9.49" stroke="#BFBFBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </a>
                        <a href="#">
                        <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.304 2.68a5.793 5.793 0 0 0-1.879-1.243 5.838 5.838 0 0 0-6.31 1.243L12 3.784 10.884 2.68A5.82 5.82 0 0 0 6.79 1a5.82 5.82 0 0 0-4.094 1.68A5.705 5.705 0 0 0 1 6.734c0 1.52.61 2.978 1.696 4.053l1.115 1.105L12 20l8.188-8.108 1.116-1.104a5.728 5.728 0 0 0 1.255-1.86 5.682 5.682 0 0 0-1.255-6.248v0Z" stroke="#BFBFBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="project-media-wrap">
                <div className="prj-left-media-wrap">
                    <div className="img-wrap large">
                        <Image src="/assets/images/prop-img.png" alt="" layout='fill' />
                    </div>
                </div>
                <div className="prj-right-media-wrap">
                    <div className="img-wrap">
                        <Image src="/assets/images/prop-vid.png" alt="" layout='fill' />
                    </div>
                    <div className="img-wrap">
                        <Image src="/assets/images/prop-map.png" alt="" layout='fill'/>
                    </div>
                </div>
            </div>
            <div className="project-attributes-wrap">
                <div className="att-item">
                    <p>Location</p>
                    <h4>Sector 63A, Gurgaon</h4>
                </div>
                <div className="att-item">
                    <p>Configurations</p>
                    <h4>2BHK / 3BHK</h4>
                </div>
                <div className="att-item">
                    <p>Possession</p>
                    <h4>Ready to move</h4>
                </div>
                <div className="att-item">
                    <p>Avg. price</p>
                    <h4>₹6k /sq.ft.</h4>
                </div>
                <div className="att-item">
                    <p>Area</p>
                    <h4>1,100 - 1,800 sq.ft.</h4>
                </div>
            </div>

            <div className="project-info-wrap">
                <div className="prj-info-left">
                    <div className="prj-info-item" id="about">
                        <div className="title-wrap">
                            <h4>About Project</h4>
                        </div>
                        <div className="text-wrap">
                            <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}</p>
                            <ul>
                                <li>Spread across 47 acres</li>
                                <li>Premium floor residences conceived with the essence of freshness and designed around harmony</li>
                                <li>Pre Certification is set to be one of the first green-rated townships</li>
                                <li>Total ~300 units</li>
                            </ul>
                        </div>
                    </div>

                    <div className="prj-info-item" id="floor-plan">
                        <div className="title-wrap have-btns">
                            <h4>Floor Plan</h4>
                            <div className="title-btns-wrap">
                                <a href="#">2 BHK Apartment</a>
                                <a href="#">3 BHK Apartment</a>
                                <a href="#">4 BHK Apartment</a>
                            </div>
                        </div>
                        <div className="img-wrap">
                            <Image src="/assets/images/floor-plan.png" alt="" layout="fill"/>
                        </div>
                        <div className="floor-specs">
                            <div className="floor-specs-item">
                                <p>Built-up area</p>
                                <h5>1,800 sq.ft.</h5>
                            </div>
                            <div className="floor-specs-item">
                                <p>Possession</p>
                                <h5>Ready to move</h5>
                            </div>
                            <div className="floor-specs-item">
                                <p>Price</p>
                                <h5>₹ 1.39 Cr</h5>
                            </div>
                        </div>
                    </div>


                    <div className="prj-info-item" id="project-tour">
                        <div className="title-wrap have-btns">
                            <h4>Project Tour</h4>
                            <div className="title-btns-wrap">
                                <a href="#">360 Tour</a>
                                <a href="#">Walkthrouh Video</a>
                            </div>
                        </div>
                        <div className="project_tour_tabs">
                            <div className="prj_tour_tab">
                            <iframe width="100%" height="360" src="https://my.matterport.com/show/?m=zSHEqRKm9az" frameBorder="0" allowFullScreen="" allow="xr-spatial-tracking"></iframe>
                            </div>
                        </div>
                    </div>

                    <div className="prj-info-item" id="project-specs">
                        <div className="title-wrap">
                            <h4>Specifications</h4>
                        </div>
                        <div className="prj-spec-table-wrap">
                            <table className="prj-spec-table">
                                <tbody>
                                    <tr>
                                        <th>Master Bedroom-Flooring</th>
                                        <td>Italian/Imported Marble</td>
                                    </tr>
                                    <tr>
                                        <th>Fittings & Fixtures</th>
                                        <td>Wardrobes, Split Air Conditioner</td>
                                    </tr>
                                    <tr>
                                        <th>Kitchen Equipments</th>
                                        <td>Modular Kitchen, Hob, Chimney</td>
                                    </tr>
                                    <tr>
                                        <th>Bathroom</th>
                                        <td>Shower Panel, Geyser, Premium Bath Fittings</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="prj-info-item" id="project-amenities">
                        <div className="title-wrap">
                            <h4>Amenities</h4>
                            <p>Birla Navya Gurgaon presents an exclusive opportunity to own a stunning home that offers all kinds of amenities and facilities.</p>
                            <div className="title-btns-wrap">
                                <a href="#">Sports</a>
                                <a href="#">Convenience</a>
                                <a href="#">Safety</a>
                                <a href="#">Leisure</a>
                                <a href="#">Environment</a>
                            </div>
                        </div>
                        <div className="amenities-tabs-wrap">
                            <div className="amenities-wrap tab-wrap">
                                <div className="amenities-item">
                                    <div className="icon">
                                        <Image src="/assets/images/gymnassium.png" alt="Gymnassium" width="60" height="60" objectFit="contain" objectPosition="center"/>
                                    </div>
                                    <h5>Gymnassium</h5>
                                </div>
                                <div className="amenities-item">
                                    <div className="icon">
                                        <Image src="/assets/images/swimming-pool.png" alt="swimming-pool" width="60" height="60" objectFit="contain" objectPosition="center"/>
                                    </div>
                                    <h5>Swimming Pool</h5>
                                </div>
                                <div className="amenities-item">
                                    <div className="icon">
                                        <Image src="/assets/images/badminton.png" alt="badminton" width="60" height="60" objectFit="contain" objectPosition="center"/>
                                    </div>
                                    <h5>Badminton</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="prj-info-item" id="project-properties">
                        <div className="title-wrap">
                            <h4>Project Properties</h4>
                        </div>
                        <div className="proprop-slider-wrapper">
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                className="proprop-slider"
                            >
                                <SwiperSlide>
                                    <div className="proprop">
                                        <div className="img-wrap">
                                            <Image src="/assets/images/project-prop-1.png" layout="fill"/>
                                        </div>
                                        <div className="info">
                                            <h3>Shapoorji Pallonji</h3>
                                            <p className="prop-config">2 BHK / 3 BHK</p>
                                            <p className="prop-loc">Sector 34, Gurgaon</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="proprop">
                                        <div className="img-wrap">
                                            <Image src="/assets/images/project-prop-2.png" layout="fill"/>
                                        </div>
                                        <div className="info">
                                            <h3>Ambience Creacions</h3>
                                            <p className="prop-config">2 BHK / 3 BHK</p>
                                            <p className="prop-loc">Sector 34, Gurgaon</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="proprop">
                                        <div className="img-wrap">
                                            <Image src="/assets/images/project-prop-3.png" layout="fill"/>
                                        </div>
                                        <div className="info">
                                            <h3>Shapoorji Pallonji</h3>
                                            <p className="prop-config">2 BHK / 3 BHK</p>
                                            <p className="prop-loc">Sector 34, Gurgaon</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="proprop">
                                        <div className="img-wrap">
                                            <Image src="/assets/images/project-4.jpg" alt="" layout="fill"/>
                                        </div>
                                        <div className="info">
                                            <h3>BPTP Terra</h3>
                                            <p className="prop-config">2 BHK / 3 BHK</p>
                                            <p className="prop-loc">Sector 34, Gurgaon</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>

                            <Link href="#">
                                <a className="property-btn">
                                See All Projects
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

                    <div className="prj-info-item" id="about-developer">
                        <div className="title-wrap">
                            <h4>About Developer</h4>
                        </div>
                        <div className="about-dev-wrap">
                            <div className="dev-logo">
                                <Image src="/assets/images/builder-image.jpg" alt="" layout="fill" objectFit="contain"/>
                            </div>
                            <div className="text-wrap">
                                <p>Anantraj Estates And Birla Estates is a property development company   in Delhi NCR. It is dedicated to making customers’ dreams of purchasing property a reality. The firm’s main focus is on developing projects with uncompromising quality standards. <br /> <br /> It ensures that it meets the unique needs of its discerning customers and provides them with the best real estate options available today.</p>
                                <Link href="#">
                                    <a className="property-btn">
                                    See All Projects
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

                    <div className="prj-info-item" id="project-loan-rates">
                        <div className="title-wrap">
                            <h4>Home Loan Interest Rates</h4>
                        </div>
                        <div className="loan-rates-wrap">
                            <div className="loan-rate-item">
                                <div className="logo-img">
                                    <Image src="/assets/images/loan-1.png" height="50" width="120"  objectFit="contain" />
                                </div>
                                <div className="ln-int">
                                    <p>Rate of interest</p>
                                    <div className="ln-int-rate">*Starts From 6.75%</div>
                                </div>
                                <div className="ln-emi">
                                    <p>Monthly EMI Per Lac</p>
                                    <div className="ln-emi-value">₹ 760</div>
                                </div>
                                <div className="btn-wrap">
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
                            </div>
                            <div className="loan-rate-item">
                                <div className="logo-img">
                                    <Image src="/assets/images/loan-2.png" height="50" width="120"  objectFit="contain" />
                                </div>
                                <div className="ln-int">
                                    <p>Rate of interest</p>
                                    <div className="ln-int-rate">*Starts From 6.75%</div>
                                </div>
                                <div className="ln-emi">
                                    <p>Monthly EMI Per Lac</p>
                                    <div className="ln-emi-value">₹ 760</div>
                                </div>
                                <div className="btn-wrap">
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
                            </div>
                            <div className="loan-rate-item">
                                <div className="logo-img">
                                    <Image src="/assets/images/loan-3.png" height="50" width="120"  objectFit="contain" />
                                </div>
                                <div className="ln-int">
                                    <p>Rate of interest</p>
                                    <div className="ln-int-rate">*Starts From 6.75%</div>
                                </div>
                                <div className="ln-emi">
                                    <p>Monthly EMI Per Lac</p>
                                    <div className="ln-emi-value">₹ 760</div>
                                </div>
                                <div className="btn-wrap">
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
                            </div>
                            <p className="note">
                                *These are only indicative interest rates, actual rates may vary by bank & financial institutions.
                            </p>
                        </div>
                    </div>

                </div>
                <div className="prj-info-right">
                    <div className="enq-sticky-wrap">
                        <div className="enq-sticky-form">
                            <DetailEnquiryForm/>
                        </div>
                    </div>
                    <div className="sticky-cta">
                        <div className="sticky-cta-head">
                            <div className="icon"><svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.697 17.182v-1.074a4.8 4.8 0 0 1 .498-2.178 4.021 4.021 0 0 1 1.471-1.6c.643-.405 1.422-.607 2.337-.607.941 0 1.73.202 2.366.606a3.835 3.835 0 0 1 1.442 1.591c.331.663.497 1.393.497 2.188v1.074a4.8 4.8 0 0 1-.497 2.177 3.949 3.949 0 0 1-1.462 1.601c-.636.405-1.418.607-2.346.607-.928 0-1.714-.202-2.357-.607a3.948 3.948 0 0 1-1.461-1.6 4.88 4.88 0 0 1-.488-2.178Zm2.596-1.074v1.074c0 .524.126 1.004.378 1.442.251.437.696.656 1.332.656.643 0 1.084-.216 1.322-.646.246-.438.368-.922.368-1.452v-1.074a3.05 3.05 0 0 0-.348-1.452c-.232-.444-.68-.666-1.342-.666-.623 0-1.064.222-1.323.666a2.801 2.801 0 0 0-.387 1.452ZM.347 5.528V4.455c0-.796.169-1.525.507-2.188A3.952 3.952 0 0 1 2.325.677C2.968.271 3.747.07 4.662.07c.935 0 1.72.202 2.356.606A3.814 3.814 0 0 1 8.47 2.267c.325.663.487 1.392.487 2.188v1.073c0 .796-.165 1.525-.497 2.188a3.829 3.829 0 0 1-1.451 1.58c-.643.399-1.426.597-2.347.597-.935 0-1.724-.198-2.367-.596A3.903 3.903 0 0 1 .844 7.706a4.8 4.8 0 0 1-.497-2.178Zm2.615-1.073v1.073c0 .53.122 1.015.368 1.452.251.431.696.646 1.332.646.636 0 1.074-.215 1.312-.646.246-.437.368-.921.368-1.452V4.455a3.05 3.05 0 0 0-.348-1.452c-.232-.444-.676-.666-1.332-.666-.63 0-1.07.222-1.323.666a2.893 2.893 0 0 0-.377 1.452ZM1.48 21l14-20.364h2.486L3.966 21H1.48Z" fill="#E7B554"/></svg></div>
                            <div className="title-wrap">
                                <h4>Calculate Your EMI</h4>
                                <p>Calculate your Home Loan EMI as per your budget.</p>
                            </div>
                        </div>
                        <div className="sticky-button-wrap">
                            <div className="button">
                                <a href="#" className="theme-btn">
                                    Calculate Now
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
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default ProjectDetail;