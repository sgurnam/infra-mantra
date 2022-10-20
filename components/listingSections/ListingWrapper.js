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
        <ListingGrid name="Birla Navya" image="/assets/images/listing-grid-1.jpg" logo="/assets/images/listing-grid-logo-1.jpg"/>
        <ListingGrid name="Tata La VIDA" image="/assets/images/listing-grid-2.jpg" logo="/assets/images/listing-grid-logo-2.jpg"/>
        <ListingGrid name="BPTP Terra" image="/assets/images/listing-grid-3.jpg" logo="/assets/images/listing-grid-logo-3.jpg"/>
        <ListingGrid name="Birla Navya" image="/assets/images/listing-grid-1.jpg" logo="/assets/images/listing-grid-logo-1.jpg"/>
      </div>
    </div>
  );
};

export default ListingWrapper;
