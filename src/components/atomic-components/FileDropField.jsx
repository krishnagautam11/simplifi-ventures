import { useRef, useState } from "react";

export const FileDropField = ({ onFileSelect, label }) => {
  const [dragOver, setDragOver] = useState(false);
  const [fileName, setFileName] = useState("");
  const [errors, setErrors] = useState("");   // ← FIXED (string instead of object)
  const inputRef = useRef();

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => setDragOver(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    validateAndSetFile(file);
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    validateAndSetFile(file);
  };

  const validateAndSetFile = (file) => {
    if (!file) return;

    const allowed = ["application/pdf", "text/plain"];
    if (!allowed.includes(file.type)) {
      setErrors("Only PDF and TXT files are allowed.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrors("File size must be less than 5 MB.");
      return;
    }

    // valid file
    setErrors("");  // ← FIXED (clear error)
    setFileName(file.name);
    onFileSelect(file);
  };

  const handleCancel = () => {
    setFileName("");
    setErrors("");   // ← CLEAR error
    onFileSelect(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div
      className={`file-drop-zone ${dragOver ? "drag-over" : ""} flex flex-col gap-1`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <label className="font-medium">{label}</label>

      <div
        className="drop-area w-full cursor-pointer flex flex-col justify-center text-center"
        onClick={() => inputRef.current.click()}
      >
        {fileName ? (
          <div className="file-info flex items-center justify-between px-2">
            <p className="truncate">{fileName}</p>
            <button type="button" onClick={handleCancel} className="text-xl font-bold">
              ×
            </button>
          </div>
        ) : (
          <p>Drag & drop your resume here or click to upload (PDF / TXT, max 5 MB)</p>
        )}

        <input
          type="file"
          accept=".pdf,.txt"
          ref={inputRef}
          style={{ display: "none" }}
          onChange={handleChange}
        />
      </div>

      {errors && <p className="error-text">{errors}</p>}
    </div>
  );
};


// import { useRef, useState } from "react";

// export const FileDropField = ({ onFileSelect, label }) => {
//   const [dragOver, setDragOver] = useState(false);
//   const [fileName, setFileName] = useState("");
//   const [errors, setErrors] = useState({});
//   const inputRef = useRef();

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     setDragOver(true);
//   };

//   const handleDragLeave = () => setDragOver(false);

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setDragOver(false);
//     const file = e.dataTransfer.files[0];
//     validateAndSetFile(file);
//   };

//   const handleChange = (e) => {
//     const file = e.target.files[0];
//     validateAndSetFile(file);
//   };

//   const validateAndSetFile = (file) => {
//     if (!file) return;
//     const allowed = ["application/pdf", "text/plain"];
//     if (!allowed.includes(file.type)) {
//       setErrors("Only PDF and TXT files are allowed.");
//       return;
//     }
//     if (file.size > 5 * 1024 * 1024) {
//       setErrors("File size must be less than 5 MB.");
//       return;
//     }
//     setFileName(file.name);
//     onFileSelect(file);
//   };

//   const handleCancel = () => {
//     setFileName("");
//     onFileSelect(null);
//     if (inputRef.current) inputRef.current.value = "";
//   };

//   return (

//     <div
//       className={`
//     file-drop-zone
//     ${dragOver ? "drag-over" : ""}
//     flex flex-col gap-1
//   `}
//       onDragOver={handleDragOver}
//       onDragLeave={handleDragLeave}
//       onDrop={handleDrop}
//     >
//       <label className="font-medium">{label}</label>

//       <div
//         className="
//       drop-area
//       w-full cursor-pointer
//       flex flex-col justify-center
//       text-center
//     "
//         onClick={() => inputRef.current.click()}
//       >
//         {fileName ? (
//           <div className="file-info flex items-center justify-between px-2">
//             <p className="truncate">{fileName}</p>
//             <button
//               type="button"
//               onClick={handleCancel}
//               className="text-xl font-bold"
//             >
//               ×
//             </button>
//           </div>
//         ) : (
//           <p>Drag & drop your resume here or click to upload (PDF / TXT, max 5 MB)</p>
//         )}

//         <input
//           type="file"
//           accept=".pdf,.txt"
//           ref={inputRef}
//           style={{ display: "none" }}
//           onChange={handleChange}
//         />
//       </div>

//       {errors && <p className="error-text">{errors}</p>}
//     </div>

//     // <div
//     //   className={`file-drop-zone ${dragOver ? "drag-over" : ""}`}
//     //   onDragOver={handleDragOver}
//     //   onDragLeave={handleDragLeave}
//     //   onDrop={handleDrop}
//     // >
//     //   <label>{label}</label>
//     //   <div className="drop-area" onClick={() => inputRef.current.click()}>
//     //     {fileName ? (
//     //       <div className="file-info">
//     //         <p>{fileName}</p>
//     //         <button type="button" onClick={handleCancel}>×</button>
//     //       </div>
//     //     ) : (
//     //       <p>Drag & drop your resume here or click to upload (PDF / TXT, max 5 MB)</p>
//     //     )}
//     //     <input
//     //       type="file"
//     //       accept=".pdf,.txt"
//     //       ref={inputRef}
//     //       style={{ display: "none" }}
//     //       onChange={handleChange}
//     //     />
//     //   </div>
//     // </div>
//   );
// };
