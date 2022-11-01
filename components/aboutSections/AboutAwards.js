import Section from "../UI/Section";
import Image from "next/image";

const AboutAwards = (props) => {
    return (
        <Section classes="about-awards" pageWidth="container">
            <div className="ab-awards-left">
                <div className="img-wrap">
                    <Image src="/assets/images/about-awards.jpg" layout="fill"/>
                </div>
            </div>
            <div className="ab-awards-right text-white">
                <div className="section-head">
                    <h2 className="text-white">Awards</h2>
                    <p className="text-white subheading">In the last 3 years, we've received<br/> over 30+ recognitions.</p>
                </div>
                <div className="text-wrap">
                    <p className="text-white">{`An escalating startup INFRAMANTRA plans to make a revolution and a remarkable success in the online property sector and has received recognition from Tata Housing, Birla Estates, DLF, Ambience, Hines, Godrej Properties, Adani Realty, Mahindra Lifespaces, and the list goes on. We've won plenty of prestigious awards because we've always been results-oriented. It doesn't matter if it's Trophies, Awards, or Words, INFRAMANTRA has consistently been found for its high-performing, well-trained professionals and sales competence. We aspire to become India's largest technology-based real estate platform by expanding its reach across India and the Middle East.`}</p>
                </div>
            </div>
        </Section>
    )
}

export default AboutAwards;