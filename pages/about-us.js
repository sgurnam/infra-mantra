import Wrapper from "../components/UI/Wrapper";
import PageHeader from "../components/UI/PageHeader";
import AboutInfo from "../components/aboutSections/AboutInfo";
import Timeline from "../components/aboutSections/Timeline";
import AboutTeam from "../components/aboutSections/AboutTeam";

export default function About(){
    const banner_data = {
        id: 26,
        image: "/assets/images/about-banner.png",
        title: "About Us",
    }
    return(
        <Wrapper>
            <PageHeader data={banner_data} />
            <AboutInfo />
            <Timeline />
            <AboutTeam/>
        </Wrapper>
    )
}