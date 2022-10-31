import Section from '../UI/Section';
import Image from 'next/image';

const Timeline = (props) => {
    return(
        <Section classes="about-timeline" pageWidth="fluid">
            <div className="tml-img-outer-wrap">
                <div className="tml-img-wrap">
                    <Image src="/assets/images/timeline-bg.png" alt="" layout="fill"/>
                </div>
            </div>
            <div className="tml-container">
                <div className="section-head text-center">
                    <h2 className='text-white'>Milestones</h2>
                    <p className='text-white'>Scroll down to <br/>Explore our timeline</p>
                </div>
                <div className="timeline-wrapper">
                    <div className="timeline-item">
                        <div className="tml-dot"></div>
                        <div className="tml-content">
                            <h3>2015</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="tml-dot"></div>
                        <h3>2017</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Timeline;