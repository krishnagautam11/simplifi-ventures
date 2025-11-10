import { useRef, useState } from "react";

export const FileDropField = ({ onFileSelect, label }) => {
  const [dragOver, setDragOver] = useState(false);
  const [fileName, setFileName] = useState("");
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
      alert("Only PDF and TXT files are allowed.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5 MB.");
      return;
    }
    setFileName(file.name);
    onFileSelect(file);
  };

  const handleCancel = () => {
    setFileName("");
    onFileSelect(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div
      className={`file-drop-zone ${dragOver ? "drag-over" : ""}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <label>{label}</label>
      <div className="drop-area" onClick={() => inputRef.current.click()}>
        {fileName ? (
          <div className="file-info">
            <p>{fileName}</p>
            <button type="button" onClick={handleCancel}>×</button>
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
    </div>
  );
};
