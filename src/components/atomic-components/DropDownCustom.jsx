import { useState, useRef, useEffect } from "react";

export const DropDownCustom = ({ label, value, selectValue, optionValue, error }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // --- SAFETY: Ensure value is always a string ---
  const safeValue = typeof value === "string" ? value : "";

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
    // Ensure option.value is always a string
    const cleanedValue = typeof option.value === "string" ? option.value : "";

    selectValue({ target: { value: cleanedValue } });
    setOpen(false);
  };

  return (
    <div
      className="
        dropdown-wrapper
        flex flex-col gap-1 relative
      "
      ref={dropdownRef}
    >
      <label className="dropdown-label">{label}</label>

      <div
        className="
          dropdown-selected
          flex items-center justify-between
          cursor-pointer
        "
        onClick={() => setOpen(!open)}
      >
        {/* SAFETY: Display only strings */}
        {safeValue}

        <span className={`custom-arrow ${open ? "open" : ""}`}></span>
      </div>

      {open && (
        <ul
          className="
            dropdown-menu
            absolute left-0 top-full
            w-full z-20
            bg-white
            shadow-md
            flex flex-col
          "
        >
          {optionValue.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className={`
                ${option.value === safeValue ? "active" : ""}
                cursor-pointer
                px-3 py-2
              `}
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


// import { useState, useRef, useEffect } from "react";


// export const DropDownCustom = ({ label, value, selectValue, optionValue, error }) => {
//   const [open, setOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleSelect = (option) => {
//     selectValue({ target: { value: option.value } });
//     setOpen(false);
//   };

//   return (

//     <div
//       className="
//     dropdown-wrapper
//     flex flex-col gap-1 relative
//   "
//       ref={dropdownRef}
//     >
//       <label className="dropdown-label">{label}</label>

//       <div
//         className="
//       dropdown-selected
//       flex items-center justify-between
//       cursor-pointer
//     "
//         onClick={() => setOpen(!open)}
//       >
//         {value}
//         <span className={`custom-arrow ${open ? "open" : ""}`}></span>
//       </div>

//       {open && (
//         <ul
//           className="
//         dropdown-menu
//         absolute left-0 top-full
//         w-full z-20
//         bg-white
//         shadow-md
//         flex flex-col
//       "
//         >
//           {optionValue.map(option => (
//             <li
//               key={option.value}
//               onClick={() => handleSelect(option)}
//               className={`
//             ${option.value === value ? "active" : ""}
//             cursor-pointer
//             px-3 py-2
//           `}
//             >
//               {option.label || option.value}
//             </li>
//           ))}
//         </ul>
//       )}

//       {error && <p className="error-text">{error}</p>}
//     </div>

//     // <div className="dropdown-wrapper" ref={dropdownRef}>
//     //   <label className="dropdown-label">{label}</label>

//     //   <div className="dropdown-selected" onClick={() => setOpen(!open)}>
//     //     {value}
//     //     <span className={`custom-arrow ${open ? "open" : ""}`}></span>

//     //   </div>

//     //   {open && (
//     //     <ul className="dropdown-menu">
//     //       {optionValue.map((option) => (
//     //         <li
//     //           key={option.value}
//     //           onClick={() => handleSelect(option)}
//     //           className={option.value === value ? "active" : ""}
//     //         >
//     //           {option.label || option.value}
//     //         </li>
//     //       ))}
//     //     </ul>
//     //   )}

//     //   {error && <p className="error-text">{error}</p>}
//     // </div>
//   );
// };
