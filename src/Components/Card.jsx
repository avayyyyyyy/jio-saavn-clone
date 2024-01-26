import React from "react";
import { NavLink } from "react-router-dom";

const Card = () => {
  return (
    <NavLink className="flex-col p-4 flex justify-center items-center w-fit gap-4 hover:shadow-lg transition-all ease-in-out rounded-md ">
      <div className="black">
        <img
          className="w-44 rounded-md"
          src="https://c.saavncdn.com/679/Thunderclouds-English-2018-20180809032729-500x500.jpg"
          alt="music-image"
        />
      </div>
      <div>
        <h1>Thunderclouds</h1>
        <h1 className="text-sm text-center text-zinc-500">Lsd</h1>
      </div>
    </NavLink>
  );
};

export default Card;
