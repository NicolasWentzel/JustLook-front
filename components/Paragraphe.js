import React from "react";

function Paragraphe(props) {
  return (
    <p
      className="mb-3 border-2 border-primary-300 p-5 bg-gray-700 rounded-lg prose"
      {...props}
    ></p>
  );
}

export default Paragraphe;
