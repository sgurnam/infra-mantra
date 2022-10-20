const ListingHeading = (props) => {
  return (
    <div className="listing-heading-row">
      <div className="heading">
        <h3 className="title">{props.heading}</h3>
        <p className="description">{props.description}</p>
      </div>
      <div className="sorting-filter">
        <div>
            <select>
                <option value="0" selected>Sort by</option>
                <option value="1">Best Seller</option>
                <option value="2">Newest</option>
            </select>
        </div>
      </div>
    </div>
  );
};

export default ListingHeading;
