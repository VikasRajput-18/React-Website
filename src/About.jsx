import React from "react";
import Common from "./Common";
import { NavLink } from "react-router-dom";

import girl from "./images/girl.png";

const About = () => {
  return (
    <>
      <Common
        text="Welcome to About Page with"
        imgSrc={girl}
        visit="/contact"
        btName="Contact Now"
      />
    </>
  );
};

export default About;
