import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, name, singer, data }) => {
  return (
    <Link
      to={`/albums/${data.id}`}
      className="flex flex-col justify-center gap-4 p-2 transition-all ease-in-out rounded-md cursor-pointer w-44 hover:shadow-2xl "
    >
      <div className="black">
        <img className="rounded-md w-44" src={image} alt="music-image" />
      </div>
      <div>
        {name.length >= 10 ? (
          <h1 className="text-sm">{name.slice(0, 10)}...</h1>
        ) : (
          <h1 className="text-sm">{name}</h1>
        )}
        {singer.length >= 10 ? (
          <h1 className="text-xs text-zinc-500">{singer.slice(0, 20)}...</h1>
        ) : (
          <h1 className="text-xs text-zinc-500">{singer}</h1>
        )}
        {/* <h1 className="text-sm text-center text-zinc-500">{singer}</h1> */}
      </div>
    </Link>
  );
};

export default Card;
