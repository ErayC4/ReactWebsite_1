import "./App.css";

function Navbar() {
  return (
    <div
      className="flex justify-between items-center bg-slate-950 py-2"
      id="navbar"
    >
      {/*Navbar Container*/}
      
      <a href="index.html">
        {/* logo */}
        <p className="text-2xl text-white ">OMCS</p>
      </a>

      {/* links container */}
      <div className="flex space-evenly gap-4 items-center">
        {/* profilbild */}
        <img
          src="/images/profile_picture_3.jpg"
          alt="profile picture"
          className="rounded-3xl w-9 h-9 object-cover object-center"
        />

        {/* Search Icon */}
        <button alt="search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 16 16"
            class="w-5"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </button>
        

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
  );
}

export default Navbar;
