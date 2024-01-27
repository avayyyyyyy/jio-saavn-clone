// ... (imports remain the same)

import axios from "axios";
import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import Card from "./Card";

const TopAlbum = () => {
  const [allSongs, setAllSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://saavn.me/modules?language=hindi,english")
      .then((res) => {
        setAllSongs(res.data.data.albums);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const halfLength = allSongs.slice(0, Math.floor(allSongs.length / 2));
  const remaining = allSongs.slice(Math.floor(allSongs.length / 2));

  return (
    <div className="w-[90%] min-h mb-24 m-auto mt-10">
      {isLoading ? (
        <div className="w-full z-40 min-h-64 flex justify-center items-center">
          <PropagateLoader color="#36d7b7" />
        </div>
      ) : (
        <div>
          <h1 className="text-xl text-zinc-700 font-bold">Top Albums...</h1>
          <div className="flex items-center overflow-x-scroll mt-2 justify-between  gap-3 m-auto px-2">
            <div className="flex flex-col gap-4">
              <div className="flex gap-7">
                {halfLength.map((e) => (
                  <Card
                    data={e}
                    key={e.id} // Use a unique identifier if available
                    image={e.image[2].link}
                    name={e.name}
                    singer={e.artists[0].name}
                  />
                ))}
              </div>
              <div className="flex gap-7 pb-11">
                {remaining.map((e) => (
                  <Card
                    data={e}
                    key={e.id} // Use a unique identifier if available
                    image={e.image[2].link}
                    name={e.name}
                    singer={e.artists[0].name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopAlbum;
