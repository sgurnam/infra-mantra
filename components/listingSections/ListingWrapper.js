import ListingGrid from "./ListingGrid";
import ListingHeading from "./ListingHeading";

const ListingWrapper = (props) => {
  return (
    <div className="listing-row">
      <ListingHeading
        heading="Properties in Sector 57, Gurgaon"
        description="Showing 1 - 20 of 50"
      />
      <div className="listing-grids-area">
        <ListingGrid />
        <ListingGrid />
        <ListingGrid />
      </div>
    </div>
  );
};

export default ListingWrapper;
