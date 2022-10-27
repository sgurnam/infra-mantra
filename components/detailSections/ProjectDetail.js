import Section from "../UI/Section";
import FloatingContactForm from "../UI/FloatingContactForm";
import Image from "next/image";

const ProjectDetail = (props) => {
    return(
        <Section classes="project-detail">
            <div class="project-top-info">
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
                        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm12 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-9.41-8.49 6.83 3.98m-.01-10.98L6.59 9.49" stroke="#BFBFBF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </a>
                        <a href="#">
                        <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.304 2.68a5.793 5.793 0 0 0-1.879-1.243 5.838 5.838 0 0 0-6.31 1.243L12 3.784 10.884 2.68A5.82 5.82 0 0 0 6.79 1a5.82 5.82 0 0 0-4.094 1.68A5.705 5.705 0 0 0 1 6.734c0 1.52.61 2.978 1.696 4.053l1.115 1.105L12 20l8.188-8.108 1.116-1.104a5.728 5.728 0 0 0 1.255-1.86 5.682 5.682 0 0 0-1.255-6.248v0Z" stroke="#BFBFBF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="project-media-wrap">
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
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <ul>
                                <li>Spread across 47 acres</li>
                                <li>Premium floor residences conceived with the essence of freshness and designed around harmony</li>
                                <li>Pre Certification is set to be one of the first green-rated townships</li>
                                <li>Total ~300 units</li>
                            </ul>
                        </div>
                    </div>

                    <div className="prj-info-item" id="floor-plan">
                        <div className="title-wrap">
                            <h4>Floor Plan</h4>
                            <div className="floor-config-wrap">
                                <a href="#">2 BHK Apartment</a>
                                <a href="#">3 BHK Apartment</a>
                                <a href="#">4 BHK Apartment</a>
                            </div>
                        </div>
                        <div className="img-wrap">
                            <Image src="/assets/images/floor-plan.png" alt="" layout="fill"/>
                        </div>
                    </div>

                </div>
                <div className="prj-info-right">
                    <div className="enq-sticky-wrap">
                        <div className="enq-sticky-form">
                            <FloatingContactForm/>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default ProjectDetail;