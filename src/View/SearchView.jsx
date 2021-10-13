import React, { useState } from "react";
import Searcharea from "../components/Searcharea/Searcharea.jsx";
import SearchOutput from "../components/SearchOutput/SearchOutput.jsx";

const SearchView = () => {
  const [artistList, setartistList] = useState([]);
  const [isEventAvaiable, setisEventAvaiable] = useState(false);
  const [mainloading, setloading] = useState(false);
  return (
    <div>
      <Searcharea
        setartistList={setartistList}
        setisEventAvaiable={setisEventAvaiable}
        setloading={setloading}
      />
      {setartistList.length > 0
        ? artistList.map((art) => {
            return (
              <SearchOutput
                art={art}
                isEventAvaiable={isEventAvaiable}
                setisEventAvaiable={setisEventAvaiable}
                mainloading={mainloading}
              />
            );
          })
        : null}
    </div>
  );
};

export default SearchView;
