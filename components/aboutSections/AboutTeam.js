import Section from "../UI/Section";
import Image from "next/image";

const AboutTeam  = (props) => {
    return(
        <Section classes="about-team" pageWidth="container">
            <div className="about-team-left">
                <div className="section-head">
                    <h2>Our Team</h2>
                    <p>We are experts in our world of housing</p>
                </div>
                <div className="text-wrap">
                    <p>Meet the team that invented the platform! We brought together the most talented people around the globe to simplify your housing experience.</p>
                </div>
            </div>
            <div className="about-team-right">
                <div className="about-team-wrap">
                    <div className="ab-team-item">
                        <div className="img-wrap">
                            <Image src="/assets/images/person_2.png" alt="" layout="fill"/>
                        </div>
                        <div className="info">
                            <h4 className="ab-team-name">Shiwang Suraj</h4>
                            <p className="ab-team-pos">Founder & Director</p>
                        </div>
                    </div>
                    <div className="ab-team-item">
                        <div className="img-wrap">
                            <Image src="/assets/images/person_1.png" alt="" layout="fill"/>
                        </div>
                        <div className="info">
                            <h4 className="ab-team-name">Garvit Tiwari</h4>
                            <p className="ab-team-pos">Founder & Director</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default AboutTeam;