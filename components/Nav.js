import React from "react";
import { Collapse } from "flowbite";

function Nav(props) {
  const $targetEl = document.getElementById("targetEl");
  const $triggerEl = document.getElementById("triggerEl");
  const options = {
    onCollapse: () => {
      console.log("element has been collapsed");
    },
    onExpand: () => {
      console.log("element has been expanded");
    },
    onToggle: () => {
      console.log("element has been toggled");
    },
  };
  const collapse = new Collapse($targetEl, $triggerEl, options);

  return (
    <nav className="fixed w-full z-20 top-0 left-0 px-2 bg-gray-900 border-gray-700 border-b">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#" className="flex items-center">
          <img
            class=" h-24 max-w-xs pt-3 pb-1.5"
            src="logo4.png"
            alt="image description"
          />

          {/* <span className="text-xl font-semibold whitespace-nowrap text-white">
            {props.title}
          </span> */}
        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-600 text-gray-400 hover:bg-gray-700 "
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            // fill-rule="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              // fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col p-4 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 md:text-white "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium  rounded md:border-0 md:p-0 md:w-auto text-gray-400 hover:text-white focus:text-white border-gray-700 hover:bg-gray-700 md:hover:bg-transparent"
              >
                Discours
                <svg
                  className="w-5 h-5 ml-1 "
                  aria-hidden="true"
                  fillRule="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdownNavbar"
                className="z-10 hidden font-normal divide-y rounded-lg shadow w-44 bg-gray-700 divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                    >
                      Mariage
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 rounded md:border-0  md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
