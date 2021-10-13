import { React, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FaSearch } from "react-icons/fa";
import axios from "../../api";
import Axios from "axios";
const SearchArea = ({ setartistList, setisEventAvaiable, setloading }) => {
  const [query, setquery] = useState("");
  const [musicQoutes, setmusicQoutes] = useState([]);

  useEffect(() => {
    Axios.get("data/music.json").then((res) => {
      setmusicQoutes(res.data.music_qoutes);
    });
  }, []);
  const getArtistByName = () => {
    setloading(true);
    axios
      .get(`artists/${query}?app_id=${process.env.REACT_APP_API_KEY}`)
      .then((res) => {
        let modData = {
          ...res.data,
          qoute: musicQoutes[Math.floor(Math.random() * 6)],
        };
        setartistList([modData]);
        setTimeout(() => {
          setloading(false);
        }, 1000);
      })
      .catch((err) => {
        setTimeout(() => {
          toast.error(err);
          setloading(false);
        }, 1000);
      });
  };
  return (
    <div className="relative flex w-9/12 flex-wrap items-stretch mx-auto">
      <input
        onChange={(e) => {
          setquery(e.target.value);
        }}
        name="artistname"
        type="text"
        placeholder="Artist Name"
        className="px-3 py-3 placeholder-white text-white bg-gray-500 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring border-black w-full pr-10 font-sans"
      />
      <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
        <FaSearch
          className="cursor-pointer"
          data-testid="searchIcon"
          aria-hidden="true"
          onClick={() => {
            setisEventAvaiable(false);
            getArtistByName();
          }}
        />
      </span>
    </div>
  );
};

export default SearchArea;
