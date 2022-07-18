import React, { useEffect, useRef, useState } from "react";
import "./Dropdown.css";

// TODO LIST
// highlight the default value when dropdown shows up
// Save the selected value in local storage and when you reload the page load from local storage if it exists
// when you click outside of the modal you should close the modal
// You should be able to select and item only with keyboard and use arrow up and down in the modal to go next or prev
// Pressing escape should close the modal if its open
// write unit tests for this with 100% coverage
// any Div with onClick should have a role set ( check accesibility rules for Div element )

// position absolute and position relative
import DropDownItem from "./DropDownItem";
function Dropdown(props) {
  // handle null values and null scenarios, where the data is not what you expect

  const { onSelect, items, title } = props;
  const [toggle, setToggle] = useState(false);
  const [activeItem, setActiveItem] = useState(title);
  const wrapper = useRef();
  useEffect(() => {
    if (toggle) {
      document.addEventListener("click", handleClickOutside, false);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  });

  const handleClickOutside = (e) => {
    if (!wrapper.current.contains(e.target)) {
      setToggle(!toggle);
    }
  };

  const handleSelect = (itemTitle) => {
    // setDropdownTitle(itemTitle);
    setToggle(!toggle);
    onSelect(itemTitle);
    setActiveItem(itemTitle);
    localStorage.setItem("selectedItem", itemTitle);
  };

  const listItems = items?.map((element) => (
    <DropDownItem
      text={element}
      key={element}
      onSelect={handleSelect}
      selected={activeItem === element}
    />
  ));
  //   items could be :  null , undefined or []
  //   if (items != null) {
  if (!items || items.length < 1) {
    return <div>Nothing here</div>;
  }

  return (
    <div className="dropdown" ref={wrapper}>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        {title}
      </button>
      {toggle && <div className="dropdown-menu">{listItems}</div>}
    </div>
  );
  //   }
  //   return <div>You sent null value!</div>;
}
export default Dropdown;
