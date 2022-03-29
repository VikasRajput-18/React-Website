import React from "react";
import { NavLink } from "react-router-dom";

import myPic from "./images/myPic.png";
const Common = (props) => {
  return (
    <div>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto ">
              <div className="row">
                <div
                  className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 my-5 d-flex align-items-start justify-content-center flex-column
"
                >
                  <h1 className="heading">
                    {props.text} <br />
                    <strong className="brand-name"> Vikas Rajput</strong> Web
                    Developer
                  </h1>
                  <p className="my-2 bio">
                    Improve your Skill to Become a good web Developer
                  </p>
                  <div className="">
                    <NavLink
                      to={props.visit}
                      className="btn btn-outline-primary rounded-pill"
                    >
                      {props.btName}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgSrc}
                    className="img-fluid animated my-5"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Common;
