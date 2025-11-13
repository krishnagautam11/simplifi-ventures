import { useState, useRef, useEffect } from "react";


export const DropDownCustom = ({ label, value, selectValue, optionValue, error }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    selectValue({ target: { value: option.value } });
    setOpen(false);
  };

  return (
    <div className="dropdown-wrapper" ref={dropdownRef}>
      <label className="dropdown-label">{label}</label>

      <div className="dropdown-selected" onClick={() => setOpen(!open)}>
        {value}
        <span className={`custom-arrow ${open ? "open" : ""}`}></span>

      </div>

      {open && (
        <ul className="dropdown-menu">
          {optionValue.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className={option.value === value ? "active" : ""}
            >
              {option.label || option.value}
            </li>
          ))}
        </ul>
      )}

      {error && <p className="error-text">{error}</p>}
    </div>
  );
};
