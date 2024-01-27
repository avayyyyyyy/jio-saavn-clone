// ... (imports remain the same)

import axios from "axios";
import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { trending } from "../Store/SongsAtom";
import Card from "./Card";
import { useRecoilState } from "recoil";

const TrendingNow = () => {
  const [trendingSongs, setTrendingSongs] = useRecoilState(trending);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://saavn.me/modules?language=hindi,english")
      .then((res) => {
        setTrendingSongs(res.data.data.trending.albums);
        setTrendingSongs(res.data.data.trending.albums);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const halfLength = trendingSongs.slice(
    0,
    Math.floor(trendingSongs.length / 2)
  );
  const remaining = trendingSongs.slice(Math.floor(trendingSongs.length / 2));

  return (
    <div className="w-[90%] min-h mb-11 m-auto mt-10">
      {isLoading ? (
        <div className="w-full z-40 min-h-64 flex justify-center items-center">
          <PropagateLoader color="#36d7b7" />
        </div>
      ) : (
        <div>
          <h1 className="text-xl text-zinc-700 font-bold">Trending Now...</h1>
          <div className="flex items-center overflow-x-scroll mt-2 justify-between gap-3 m-auto px-9">
            <div className="flex flex-col gap-4 p-3">
              <div className="flex gap-7 py-3">
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

export default TrendingNow;
