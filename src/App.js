import "./App.css";
import Dropdown from "./Dropdown";
import { useState } from "react";
import "./index.css";
function App() {
  const items = ["Action", "Another action", "Something else here"];
  // Single point of truth
  const defaultItem = localStorage.getItem("selectedItem") || items[0];

  const [dropdownTitle, setDropdownTitle] = useState(defaultItem);
  const handleSelect = (title) => {
    setDropdownTitle(title);
  };

  return (
    <div className="wrapper">
      <Dropdown title={dropdownTitle} items={items} onSelect={handleSelect} />
    </div>
  );
}

export default App;
