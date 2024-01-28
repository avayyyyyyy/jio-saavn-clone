import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IoPlayCircle } from "react-icons/io5";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { player, playerVisible } from "../Store/SongsAtom";

const AlbumPage = () => {
  const [albumData, setAlbumData] = useState({});
  const { id } = useParams();
  const [playerInfo, setPlayerInfo] = useRecoilState(player);
  const [playerVisiblee, setPlayerVisible] = useRecoilState(playerVisible);

  const fetchData = async () => {
    try {
      const res = await axios.get(`https://saavn.me/albums?id=${id}`);
      const { data } = res;

      setAlbumData(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  // Accessing image with quality "500x500"
  const photo =
    albumData.image && albumData.image.find((e) => e.quality === "500x500");

  function setPlayer(e) {
    setPlayerInfo({ ...e, albumImage: photo });
    setPlayerVisible(true);
  }

  return (
    <div className="flex items-center justify-center w-screen h-[90vh] m-auto gap-9">
      <div className="p-4 transition-all ease-in-out rounded-md w-fit bg-zinc-100 hover:shadow-lg">
        <div>
          {photo && (
            <img className="w-64 m-auto" src={photo.link} alt="albumImage" />
          )}
        </div>
        <div className="mt-5">
          <h1 className="font-bold">{albumData.name}</h1>
          <h2 className="text-sm font-light">{albumData.year}</h2>
        </div>
        <div className="text-sm font-light">{albumData.primaryArtists}</div>
      </div>
      <div>
        <div className="flex flex-col gap-2 overflow-y-scroll max-h-[60vh]">
          {albumData.songs
            ? albumData.songs.map((e) => {
                return (
                  <div
                    onClick={() => setPlayer(e)}
                    key={e.id}
                    className="flex items-center justify-between p-2 rounded-md hover:shadow-md bg-zinc-200 gap-7"
                  >
                    <div className="flex gap-2">
                      <div className="text-2xl cursor-pointer hover:text-[#1CCCB0] transition-all ease-in-out">
                        {<IoPlayCircle />}
                      </div>
                      <div>
                        <h1 className="text-sm font-light text-left" key={e.id}>
                          {e.name}
                        </h1>
                      </div>
                    </div>
                    <div className="text-sm font-light text-left">
                      {typeof e.duration === "string" && !isNaN(e.duration)
                        ? (() => {
                            const durationInSeconds = e.duration;
                            const minutes = Math.floor(durationInSeconds / 60);
                            const seconds = durationInSeconds % 60;

                            const formattedDuration =
                              minutes > 0
                                ? `${minutes} mins${
                                    seconds > 0 ? ` ${seconds} sec` : ""
                                  }`
                                : `${seconds} sec`;

                            return <span>{formattedDuration}</span>;
                          })()
                        : "Invalid duration"}
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default AlbumPage;
