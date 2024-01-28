import { useEffect, useRef, useState } from "react";
import "/src/index.css";
import { FaPlay } from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";
import { MdFileDownload } from "react-icons/md";
import { FaPause } from "react-icons/fa";
import { TbPlayerSkipForwardFilled } from "react-icons/tb";
import { TbPlayerSkipBackFilled } from "react-icons/tb";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentPLaying, player, playerVisible } from "../Store/SongsAtom";

const Player = () => {
  const [playing, setPlaying] = useState(false);
  const playerInfo = useRecoilValue(player);
  let photo = playerInfo.albumImage;
  let playerVisibleValue = useRecoilValue(playerVisible);
  let [currentPLayingSong, setCurrentPLayingSong] =
    useRecoilState(currentPLaying);

  const song =
    playerInfo.downloadUrl &&
    playerInfo.downloadUrl.find((e) => (e.quality === "320kbps" ? e : null));

  let songURL = song ? song.link : null; // Make sure song.link is defined

  const audioRef = useRef(new Audio(songURL));

  useEffect(() => {
    if (song) {
      audioRef.current.src = song.link; // Assuming the link property holds the URL
    }
  }, [song]);

  const play = () => {
    if (song) {
      audioRef.current.play();
      setPlaying(true);
      setCurrentPLayingSong({ ...currentPLayingSong, isPlaying: true });
      play();
    }
  };

  const pause = () => {
    if (song) {
      audioRef.current.pause();
      setPlaying(false);
      pause();
      setCurrentPLayingSong({ ...currentPLayingSong, isPlaying: false });
    }
  };

  const playPause = () => {
    if (playing) {
      pause();
    } else {
      play();
    }
  };

  return (
    <>
      <div
        className={`fixed ${
          playerVisibleValue ? "bottom-0" : "bottom-[-100px]"
        } bottom-0 z-20 flex-col transition-all ease-in-out bg-white pb-6 pt-0 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] flex `}
      >
        <input
          type="range"
          name="music-range"
          min={0}
          max={playerInfo.duration || 0} // Default to 0 if duration is not available
          className="sticky top-[0px] w-screen h-[5px]"
          defaultValue={0}
          step={0.1}
          id=""
        />

        <div className="flex items-center justify-between w-full px-4 mt-4">
          <div className="flex gap-2 w-44">
            <img
              className="w-12 h-12 rounded-md"
              src={photo.link}
              alt="music-image"
            />
            <div>
              <h1 className="font-semibold w-fit">
                {playerInfo.name.slice(0, 12)}...
              </h1>
              <h6 className="text-xs font-normal text-zinc-600">
                {playerInfo.singer
                  ? playerInfo.singer.slice(0, 12)
                  : playerInfo.primaryArtists.slice(0, 12)}
                ...
              </h6>
            </div>
          </div>
          <div className="flex justify-between gap-5 text-3xl text-center w-44">
            <TbPlayerSkipBackFilled className="hover:text-[#1cccb0] transition-all ease-in-out" />
            {playing ? (
              <FaPause
                onClick={pause}
                className="hover:text-[#1cccb0] transition-all ease-in-out"
              />
            ) : (
              <FaPlay
                onClick={play}
                className="hover:text-[#1cccb0] transition-all ease-in-out"
              />
            )}
            <TbPlayerSkipForwardFilled className="hover:text-[#1cccb0] transition-all ease-in-out" />
          </div>
          <div className="flex justify-center text-3xl gap-7 w-44">
            <MdFileDownload className="hover:text-[#1cccb0] transition-all ease-in-out" />
            <AiFillSound className="hover:text-[#1cccb0] transition-all ease-in-out" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
