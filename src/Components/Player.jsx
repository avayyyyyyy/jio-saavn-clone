import { useState } from "react";
import "/src/index.css";
import { FaPlay } from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";
import { MdFileDownload } from "react-icons/md";
import { FaPause } from "react-icons/fa";
import { TbPlayerSkipForwardFilled } from "react-icons/tb";
import { TbPlayerSkipBackFilled } from "react-icons/tb";

const Player = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="fixed bottom-0 z-20 flex-col bg-white pb-6 pt-0 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] flex ">
      <input
        type="range"
        name="music-range"
        min={0}
        max={100}
        className="sticky top-[0px] w-screen h-[5px] ]"
        defaultValue={0}
        step={0.1}
        id=""
      />
      <div className="flex justify-between w-full mt-4 items-center px-4">
        <div className="flex gap-2 w-44">
          <img
            className="w-12 rounded-md"
            src="https://c.saavncdn.com/679/Thunderclouds-English-2018-20180809032729-500x500.jpg"
            alt="music-image"
          />
          <div>
            <h1 className="font-semibold">Thunderclouds</h1>
            <h6 className="font-light text-sm text-zinc-600">Lsd</h6>
          </div>
        </div>
        <div className="text-3xl flex gap-5 justify-between w-44 text-center">
          <TbPlayerSkipBackFilled className="hover:text-[#1cccb0] transition-all ease-in-out" />
          {playing ? (
            <FaPlay
              onClick={() => setPlaying(!playing)}
              className="hover:text-[#1cccb0] transition-all ease-in-out"
            />
          ) : (
            <FaPause
              onClick={() => setPlaying(!playing)}
              className="hover:text-[#1cccb0] transition-all ease-in-out"
            />
          )}
          <TbPlayerSkipForwardFilled className="hover:text-[#1cccb0] transition-all ease-in-out" />
        </div>
        <div className="flex gap-7 w-44 justify-center text-3xl">
          <MdFileDownload className="hover:text-[#1cccb0] transition-all ease-in-out" />
          <AiFillSound className="hover:text-[#1cccb0] transition-all ease-in-out" />
        </div>
      </div>
    </div>
  );
};

export default Player;
