import React from "react";

function Input(props) {
  return (
    <input
      className="text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
      {...props}
    />
  );
}

export default Input;
