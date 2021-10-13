import React from "react";
import logo from "../../src/assets/images/music.png";
const Header = () => {
  return (
    <div className="flex flex-row justify-content justify-center items-center m-20">
      <img src={logo} width="60" height="60" class="d-inline-block" alt="" />
      <h1 className="text-5xl text-white align ml-4">Art n Artist</h1>
    </div>
  );
};

export default Header;
