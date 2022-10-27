import FilterAccordion from "../UI/FilterAccordion";

const FiltersArea = (props) => {
  const filterListing = [
    {
      heading: "PROPERTY TYPE",
      activeStatus: true,
      filters: ["Residential flat", "Independent house", "Studio", "Apartment"],
    },
    {
      heading: "BHK TYPE",
      activeStatus: false,
      filters: ["2 BHK", "3 BHK", "4BHK"],
    },
    {
      heading: "PRICE",
      activeStatus: false,
      filters: ["1Cr", "2Cr", "3Cr", "4Cr", ">5Cr"],
    },
    {
      heading: "POSSESSION STATUS",
      activeStatus: false,
      filters: [
        "Ready to move",
        "In 1 year",
        "In 3 years",
        "More than 3 years",
      ],
    },
  ];
  return (
    <div className="filter-area" onClick={changeStateHandler}>
      {filterListing.map((filter, index) => (
        <FilterAccordion
          key={`filterrListing--${index}`}
          filterHead={filter.heading}
          filterList={filter.filters}
          activeState={filter.activeStatus}
        />
      ))}
    </div>
  );
};

export default FiltersArea;
