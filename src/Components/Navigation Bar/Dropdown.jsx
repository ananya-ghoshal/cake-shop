import React, { useState } from "react";
import "./Navbar.css";

function Dropdown({ props }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };
  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="dropdown-button">{props.text} ▼</button>
      {isOpen && (
        <ul className="dropdown-menu">
          {props.options.map((option) => (
            <li key={option.id} className="dropdown-item">
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
