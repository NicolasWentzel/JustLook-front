import React from "react";

function Textarea(props) {
  return (
    <textarea
      className="block p-2.5 w-full text-sm rounded-lg border focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
      {...props}
    ></textarea>
  );
}

export default Textarea;
