import Wrapper from "../components/UI/Wrapper";
import SearchListing from "../components/listingSections/SearchListing";
import Section from "../components/UI/Section";
import SideMenu from "../components/detailSections/SideMenu";
import ProjectDetail from "../components/detailSections/ProjectDetail";

export default function Detail(){
    const property = {
        title : "Birla Navya Residential Homes",
        location: "Sector 63A, Gurgaon",
        price_range: "1.16 Cr - 2.01 Cr",
        configurations: "2BHK / 3BHK",
        possession: "Ready to move",
        avg_price: "₹6k / sq.ft.",
        area: "1,100 - 1,800 sq.ft.",
        about: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><ul><li>Spread across 47 acres</li><li>Premium floor residences conceived with the essence of freshness and designed around harmony</li><li> Pre Certification is set to be one of the first green-rated townships</li>",
        bulider_logo : '/assets/logo-3.png',
        images: [
            {   id: 1,
                path: '/assets/prop-img.png'
            },
            {   id: 2,
                path: '/assets/prop-img.png'
            },
        ],
        videos: [
            {   id: 1,
                thumb: '/assets/prop-vid.png'
            },
            {   id: 2,
                thumb: '/assets/prop-vid.png'
            },
        ],
        map_code: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6998.448992092862!2d77.11911967335767!3d28.71283618917208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01681d87734f%3A0xb7e5fc09c81661e2!2sCyberworx%20Technologies!5e0!3m2!1sen!2sin!4v1666864436495!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    }

    return(
        <Wrapper
            title={property.title}
            description="This is homepage description"
        >
            <SearchListing />
            <Section  classes="infra-detail-section" pageWidth="">
                <SideMenu />
                <ProjectDetail />
            </Section>
        </Wrapper>
    )
}