import React from "react";

function Button(props) {
  return (
    <button
      className="items-center px-5 py-2.5 my-5 mt-10 mb-10 sm:mt-6 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:ring-primary-900 mx-auto block border-2 border-primary-50 hover:border-primary-800 hover:bg-primary-900 bg-primary-800 "
      {...props}
    ></button>
  );
}

export default Button;
