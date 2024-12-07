import React, { useState } from "react";

function FormulaireTest() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = () => {
    alert(`Message : ${inputValue}`);
    console.log(inputValue);
  };

  return (
    <div className="flex flex-col space-y-4 max-w-md ml-6 p-4">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="p-4 py-2 border border-gray-300 rounded w-full"
        placeholder="Votre message..."
      />
      <button
        onClick={handleClick}
        className="py-2 bg-blue-500 text-md text-white rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
}

export default FormulaireTest;