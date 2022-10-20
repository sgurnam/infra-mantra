import { useState } from "react";

const FilterAccordion = (props) => {
  const [openAcc, setOpenAcc] = useState(props.activeState);

  const accordionHandler = () => {
    openAcc ? setOpenAcc(false) : setOpenAcc(true);
  };

  

  return (
    <div className="filter-accordion">
      <div className="filter-head" onClick={accordionHandler}>
        {props.filterHead}
        <div className="toggle-icon">
          {openAcc ? "-" : "+"}
        </div>
      </div>
      {openAcc && (
        <div className="filter-options">
          {props.filterList.map((filter, index) => (
            <li key={`filterr--${index}`}>
              <div className="filter">{filter}</div>
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterAccordion;
