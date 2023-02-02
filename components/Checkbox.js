import React from "react";

function Checkbox({ items, select, newItem, deleteItem }) {
  const toggleSelectedItems = (data) => {
    if (select.includes(data)) {
      deleteItem(data);
    } else {
      newItem(data);
    }
  };

  const checkbox = items.map((item, i) => {
    return (
      <li className="" key={i}>
        <div className="flex items-center pl-3 ">
          <input
            type="checkbox"
            value={item}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 cursor-pointer"
            onChange={() => toggleSelectedItems(item)}
            checked={select.includes(item)}
          />
          <label
            htmlFor="vue-checkbox-list"
            className="w-full py-2 ml-3 text-white cursor-pointer"
            onClick={() => toggleSelectedItems(item)}
          >
            {item}
          </label>
        </div>
      </li>
    );
  });

  return (
    <>
      <button
        id="dropdownSearchButton"
        data-dropdown-toggle="dropdownSearch"
        className=" flex justify-between border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
        type="button"
      >
        {select ? (select.length > 0 ? select.join(", ") : "-") : "-"}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        id="dropdownSearch"
        className="z-10 hidden overflow-y-scroll h-48 rounded-lg shadow w-72 bg-gray-700"
      >
        <ul className="text-xs font-medium text-gray-900">{checkbox}</ul>
      </div>
    </>
  );
}

export default Checkbox;
