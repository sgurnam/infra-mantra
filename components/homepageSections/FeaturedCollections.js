import Image from "next/image";
import Section from "../UI/Section";

const FeaturedCollections = (props) => {
  const collectionList = [
    {
      id: "collection--1",
      title: "RERA Certified Projects",
      description: "Take full advantage of autonomy and privacy",
      image: "collection-img-1.jpg",
      url: "#",
    },
    {
      id: "collection--2",
      title: "Ready to move in",
      description: "Live minimally while also conserving both the environment and the money",
      image: "collection-img-2.jpg",
      url: "#",
    },
    {
      id: "collection--3",
      title: "Builder floors",
      description: "living in communities independently",
      image: "collection-img-3.jpg",
      url: "#",
    },
    {
      id: "collection--4",
      title: "Plots",
      description: "Pocket – Friendly Homes",
      image: "collection-img-4.jpg",
      url: "#",
    },
    {
      id: "collection--5",
      title: "Kothi",
      description: "Elegant homes for the affluent",
      image: "collection-img-5.jpg",
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
