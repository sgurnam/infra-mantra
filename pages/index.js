import Head from "next/head";
import Image from "next/image";
import FeaturedCollections from "../components/homepageSections/FeaturedCollections";
import FeaturedProjects from "../components/homepageSections/FeaturedProjects";
import InfraHelpYou from "../components/homepageSections/InfraHelpYou";
import PropertyTrendsUpdates from "../components/homepageSections/propertyTrendsUpdates";
import ServicesSection from "../components/homepageSections/ServicesSection";
import MainBanner from "../components/UI/MainBanner";
import Wrapper from "../components/UI/Wrapper";
import styles from "../styles/Home.module.css";

export default function Home() {
  const bannerItems = [
    {
      id: 23,
      image: "/assets/images/main-banner.jpg",
      title: "Trusted Partners For All Your Real Estate Needs",
    },
  ];

  return (
    <Wrapper
      title="Infra Mantra - Home"
      description="This is homepage description"
    >
      <MainBanner items={bannerItems} search={true}/>
      <FeaturedProjects />
      <FeaturedCollections />
      <ServicesSection />
      <InfraHelpYou />
      <PropertyTrendsUpdates />
    </Wrapper>
  );
}
