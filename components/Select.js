import React from "react";

function Select(props) {
  return (
    <select
      className=" border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
      {...props}
    ></select>
  );
}

export default Select;
