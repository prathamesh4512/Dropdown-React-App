import { useState } from "react";
// importing const listItems from utils
import { listItems } from "../utils";
import "../App.css";

const App = () => {
  // state for showing,hiding drop-box options
  const [select, setSelect] = useState(false);
  // state to update selected option
  const [index, setIndex] = useState(-1);

  // when mouse hover on select
  const handleMouseEnter = (e) => {
    setSelect(true);
  };

  // when mouse leave select
  const handleMouseLeave = (e) => {
    setSelect(false);
  };

  // on clicking on option, updating index to display selected option
  const handleClick = (index) => {
    setSelect(false);
    setIndex(index);
  };

  return (
    <div className="App">
      <h3>Should you use a dropdown ?</h3>

      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="select">
          <span>{index < 0 ? "Select" : listItems[index]}</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
            alt="drop-arrow"
          />
        </div>

        {/* if select is true then only display options-box */}
        {select && (
          <div className="options-box">
            {listItems.map((item, index) => (
              <div
                className="option"
                key={index}
                onClick={() => handleClick(index)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
