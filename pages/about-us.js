import Wrapper from "../components/UI/Wrapper";
import PageHeader from "../components/UI/PageHeader";

export default function About(){
    const banner_data = {
        id: 26,
        image: "/assets/images/about-banner.png",
        title: "About",
    }
    return(
        <Wrapper>
            <PageHeader data={banner_data} />
        </Wrapper>
    )
}