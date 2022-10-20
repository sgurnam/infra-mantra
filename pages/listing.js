import FiltersArea from "../components/listingSections/FiltersArea";
import ListingWrapper from "../components/listingSections/ListingWrapper";
import SearchListing from "../components/listingSections/SearchListing";
import Section from "../components/UI/Section";
import Wrapper from "../components/UI/Wrapper";

export default function Home() {
  const bannerItems = [
    {
      id: 23,
      image: "/assets/images/main-banner-infra.jpg",
      title: "Trusted Partners For All Your Real Estate Needs",
    },
  ];

  return (
    <Wrapper
      title="Infra Mantra - Listing"
      description="This is homepage description"
    >
      <SearchListing />
      <Section  classes="infra-recommend-section" pageWidth="">
        <FiltersArea />
        <ListingWrapper />
      </Section>
    </Wrapper>
  );
}
