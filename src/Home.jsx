import React from 'react'

import Common from "./Common";
import { NavLink } from "react-router-dom";

import myPic from "./images/myPic.png";

const Home = () => {
  return (
    <>
      <Common
        text="Grow Your Bussiness With"
        imgSrc={myPic}
        visit="/service"
        btName = 'Get Started'
      />
    </>
  );
}

export default Home