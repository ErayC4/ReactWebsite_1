import "./App.css";
import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu.jsx";
import DropdownButton from "./DropdownButton.jsx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const searchbarDropDown = (
    <div className=" bg-slate-950 flex justify-between items-center mt-6 mb-14 ">
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent text-2xl border-b w-full pb-2 pl-2 text-white outline-none"
      />
      
      <button alt="search-icon" id="dropdown" className="pl-8 pb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 16 16"
          className="w-5"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </button>
    </div>
  );

  const searchButton = (
    <button alt="search-icon" id="dropdown">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 16 16"
        className="w-5"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
      </svg>
    </button>
  );

  const XButton = (
      <button>
        <svg
          className="w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>
      </button>
  );

  return (
    <div id="navbar" className="fixed top-0 w-full z-50 bg-slate-950">
      <div className="flex justify-between items-center py-2">
        {/*Navbar Container*/}

        <a href="index.html">
          {/* logo */}
          <p className="text-2xl text-white ">OMCS</p>
        </a>

        {/* links container */}
        <div className="flex space-evenly gap-4 items-center">
          {/* profilbild */}
          <img
            src="public/images/profile_picture_4.jpg"
            alt="profile picture"
            className="rounded-3xl w-9 h-9 object-cover object-center"
          />

          {/* Search Icon */}
          <DropdownButton
            isOpen={isOpen}
            onToggle={handleToggle}
            displayIcon={searchButton}
            switchIcon={XButton}
          />

          {/* justify */}
          <button alt="justify-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 16 16"
              className="w-7"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && <DropdownMenu content={searchbarDropDown}/>}
    </div>
  );
}

export default Navbar;
