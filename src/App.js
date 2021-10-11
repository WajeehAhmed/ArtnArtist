import logo from "../src/assets/images/music.png";
import axios from "axios";
import { useEffect, useState } from "react";
import Searcharea from "./components/Searcharea/Searcharea.jsx";
import SearchOutput from "./components/SearchOutput/SearchOutput.jsx";

import SearchView from "./View/SearchView";
function App() {
  const [image, setimage] = useState("");
  const [dataList, setdataList] = useState(null);
  // useEffect(() => {
  //   axios
  //     .get("https://rest.bandsintown.com/artists/maroon 5?app_id=asd")
  //     .then((res) => {
  //       console.log(res.data);
  //       setimage(res.data.image_url);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <div className="flex flex-col bg-white-500 min-h-screen ">
      <nav className="flex flex-row justify-content justify-center">
        <img src={logo} width="30" height="30" class="d-inline-block" alt="" />
        <a class="text-xl font-bold" style={{ background: "transparent" }}>
          Art-n-Artist
        </a>
      </nav>

      {/* <Searcharea />
      <Row lg="12">
        <Col>
          <SearchOutput image={image} />
        </Col>
      </Row> */}
      <SearchView />
    </div>
  );
}

export default App;
