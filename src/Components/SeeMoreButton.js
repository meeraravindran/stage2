import { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const SeeMoreButton = (props) => {
  const [downArrow, setDownArrow] = useState(true);
  const toggle=(f)=>{
      setDownArrow(false)
      props.fun()
  }
  return (
    <button onClick={toggle} className="button">
      <span>See More</span>
      <span>
          {downArrow===true?<RiArrowDropDownLine/>:<RiArrowDropUpLine/>}
      </span>
    </button>
  );
};

export default SeeMoreButton;
