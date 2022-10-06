import Image from "next/image";
import Section from "../UI/Section";

const FeaturedCollections = (props) => {
  const collectionList = [
    {
      id: "collection--1",
      title: "Independent House",
      description: "Lorem Ipsum is simply dummy text.",
      image: "collection-img-1.jpg",
      url: "#",
    },
    {
      id: "collection--2",
      title: "Studio",
      description: "Lorem Ipsum is simply dummy text.",
      image: "collection-img-2.jpg",
      url: "#",
    },
    {
      id: "collection--3",
      title: "Townships",
      description: "Lorem Ipsum is simply dummy text.",
      image: "collection-img-3.jpg",
      url: "#",
    },
    {
      id: "collection--4",
      title: "Affordable Homes",
      description: "Lorem Ipsum is simply dummy text.",
      image: "collection-img-4.jpg",
      url: "#",
    },
    {
      id: "collection--5",
      title: "Luxury",
      description: "Lorem Ipsum is simply dummy text.",
      image: "collection-img-5.jpg",
      url: "#",
    },
  ];
  return (
    <Section classes="featured-collections-section" pageWidth="container">
      <div className="section-head">
        <h2>Featured Collections</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and
          <br />
          typesetting industry.
        </p>
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
