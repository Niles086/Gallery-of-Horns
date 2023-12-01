/* eslint-disable react/prop-types */
import React, { useState } from "react";

export default function NumberFilter(props) {
    const hornCountOptions = ["all", "1", "2", "3", "4"];
    const [selectedOption, setSelectedOption] = useState("all");
  
    const handleOptionChange = (event) => {
        
      setSelectedOption(event.target.value);
      console.log(typeof(event.target.value));
      // Call the parent component's callback with the selected option
      props.onSelectedOptionChange(event.target.value);
    };
  
    return (
      <form>
        <label>
          Select Horn Count:
          <select value={selectedOption} onChange={handleOptionChange}>
            {hornCountOptions.map((count) => (
              <option key={count} value={count}>
                {count}
              </option>
            ))}
          </select>
        </label>
      </form>
    );
  }
  