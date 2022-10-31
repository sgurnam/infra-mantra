import Image from "next/image";
import Section from "./Section";

const PageHeader = (props) => {
const item = props.data;

    return(
        <Section classes="page-header" id="" pageWidth="fluid">
            <Image src={item.image} alt="Banner" layout="fill" />
            <div className="overlay"></div>
            <div className="page-banner-content">
                <div className="page-width">
                    <h1>{item.title}</h1>
                </div>
            </div>
        </Section>
    )
}

export default PageHeader;