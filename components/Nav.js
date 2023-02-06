import React from "react";
import { Collapse } from "flowbite";
import { useRouter } from "next/router";

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
  const router = useRouter();

  return (
    <nav className="fixed w-full z-20 top-0 left-0 px-2 bg-gray-900 border-gray-700 border-b">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#" className="flex items-center">
          <img
            className=" h-24 max-w-xs pt-3 pb-1.5"
            src="logo.png"
            alt="image description"
            onClick={() => {
              router.push("/");
            }}
          />

          <span className="text-xl font-semibold whitespace-nowrap text-white ml-5">
            {props.title}
          </span>
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
              <a
                href="#"
                className="block py-2 pl-3 pr-4 rounded md:border-0  md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                onClick={() => {
                  window.location.href =
                    "https://www.linkedin.com/in/nicolaswentzel/";
                }}
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
