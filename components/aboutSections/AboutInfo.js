import Section from "../UI/Section";

const AboutInfo = (props) => {
    return(
        <Section classes="about-about" pageWidth="container">
            <div className="about-left-sticky">
                <div className="about-count">
                    <h4>15<span>+</span></h4>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
            </div>
            <div className="about-right">
                <div className="title-wrap">
                <h3>With over 1 million+ homes for sale available on the website, Inframantra can match you with a house you will want to call home.</h3>
                </div>
                <div className="about-inner-wrap vision">
                    <h4>Our Vision</h4>
                    <p>With the use of innovative and user-friendly technologies, INFRAMANTRA strives to provide excellent service to you. Our reliable sources can help you find your dream home. We assign a professional manager who will help you throughout the process, including loan and other financial & legal documentation and handling keys to your dream house.</p>
                </div>
                <div className="about-inner-wrap values">
                    <h4>Our Values</h4>
                    <p>It is our dream to become the nation’s leading real estate company and the preferred workplace for professionals in the industry. We started INFRAMANTRA from scratch with no money and in just a few years it grew into a well-known real estate firm. We work hard to build partnerships based on honesty and mutual trust, which result in long-term client engagements. In the years to come, we will continue to uphold these ideals, as they have served our firm and clients well.</p>
                </div>
            </div>
        </Section>
    )
}

export default AboutInfo;