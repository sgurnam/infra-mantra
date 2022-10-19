import Image from "next/image";
import Section from "../UI/Section";

const FeaturedCollections = (props) => {
  const collectionList = [
    {
      id: "collection--1",
      title: "RERA Certified Projects",
      description: "Find all the RERA registered projects with price, floor plan, photos, map view, features, etc.",
      image: "RERA-certified-projects.webp",
      url: "#",
    },
    {
      id: "collection--2",
      title: "Ready to move in",
      description: "Explore the list of properties which is ready for occupancy.",
      image: "ready-to-move-in.webp",
      url: "#",
    },
    {
      id: "collection--3",
      title: "Builder floors",
      description: "Wide range of fully furnished independent floors within your budget.",
      image: "builder-floors.webp",
      url: "#",
    },
    {
      id: "collection--4",
      title: "Plots",
      description: "Explore the wide range of residential land/plots.",
      image: "Plots.webp",
      url: "#",
    },
    {
      id: "collection--5",
      title: "Kothi",
      description: "Pick from a list of Premium Housing within your budget.",
      image: "Kothi.jpeg",
      url: "#",
    },
  ];
  return (
    <Section classes="featured-collections-section" pageWidth="container">
      <div className="section-head">
        <h2>Featured Collections</h2>
        <p>Exclusive Properties based on your preferred category</p>
      </div>
      <div className="collections-grids-row">
        {collectionList.map((element) => (
          <div className="collection-grid" key={element.id}>
            <div className="image">
              <Image src={`/assets/images/${element.image}`} layout="fill" />
            </div>
            <div className="content">
              <h5>{element.title}</h5>
              <p>{element.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default FeaturedCollections;
