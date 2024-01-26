import { NavLink } from "react-router-dom";
// import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-20 gap-4 pr-9">
      <div className="flex h-full">
        <img
          src="https://www.jiosaavn.com/corporate/_i/brand-guide/jiosaavn-logo-inline.png"
          alt="logo"
        />
        <div className="flex justify-center items-center gap-9">
          <NavLink
            className="hover:text-[#1CCCB0] transition-all ease-in-out"
            to="/music"
          >
            Music
          </NavLink>
          <NavLink
            className="hover:text-[#1CCCB0] transition-all ease-in-out"
            to="/podcast"
          >
            Podcasts
          </NavLink>
          <NavLink
            className="hover:text-[#1CCCB0] transition-all ease-in-out"
            to="/premium"
          >
            Go Pro
          </NavLink>
        </div>
      </div>
      <input
        type="text"
        placeholder="Search for songs, artists, playlists, podcasts"
        className="border-2 border-slate-500 py-2 px-4 rounded-full w-1/3 flex justify-center"
      />

      <div className="flex gap-6 justify-center items-center ">
        <div>
          <h1 className="font-bold text-sm">Music Language</h1>
          <h6 className="font-light text-sm">Hindi</h6>
        </div>

        <div className="flex gap-4">
          <NavLink
            className="hover:text-[#1CCCB0] transition-all ease-in-out"
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className="hover:text-[#1CCCB0] transition-all ease-in-out"
            to="/signup"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
