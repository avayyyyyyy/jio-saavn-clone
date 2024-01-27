import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ image, name, singer }) => {
  return (
    <div className="flex-col p-2 cursor-pointer flex justify-center w-44 gap-4 hover:shadow-2xl transition-all ease-in-out rounded-md ">
      <div className="black">
        <img className="w-44 rounded-md" src={image} alt="music-image" />
      </div>
      <div>
        {name.length >= 10 ? (
          <h1 className="text-sm">{name.slice(0, 10)}...</h1>
        ) : (
          <h1 className="text-sm">{name}</h1>
        )}
        {singer.length >= 10 ? (
          <h1 className="text-xs  text-zinc-500">{singer.slice(0, 20)}...</h1>
        ) : (
          <h1 className="text-xs text-zinc-500">{singer}</h1>
        )}
        {/* <h1 className="text-sm text-center text-zinc-500">{singer}</h1> */}
      </div>
    </div>
  );
};

export default Card;
