import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const AlbumPage = () => {
  let [song, setSong] = useState([]);
  const { id } = useParams();

  const fetchData = async () => {
    const res = await axios.get(`https://saavn.me/albums?id=${id}`);
    // console.log(res)
    const { data } = res;
    setSong(data.data);
    console.log(window.location.href);
  };

  console.log(song);

  useEffect(() => {
    fetchData();
  }, []);

  console.log(id);
  const { image } = song;
  console.log(image[2].link);

  return (
    <div>
      <div>
        <div>{/* <img src={image[2].link} alt="albumImage" /> */}</div>
        <div>
          <h1></h1>
          <h1></h1>
          <h1></h1>
        </div>
        <div>Play Wishlist More</div>
      </div>
    </div>
  );
};

export default AlbumPage;
