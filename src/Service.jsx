import React from "react";
import Card from "./Card";

import Sdata from "./Sdata";

const Service = () => {

  return (
    <div>
      <div className="text-center my-5">
        <h1>Service Page</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-4 col-lg-10 mx-auto d-flex flex-wrap  ">
                {/* <Card imgSrc={Sdata[0].imgsrc} text={Sdata[0].title} />
                <Card imgSrc={Sdata[1].imgsrc} text={Sdata[1].title} />
                <Card imgSrc={Sdata[2].imgsrc} text={Sdata[2].title} />
                <Card imgSrc={Sdata[3].imgsrc} text={Sdata[3].title} />
                <Card imgSrc={Sdata[4].imgsrc} text={Sdata[4].title} />
                <Card imgSrc={Sdata[5].imgsrc} text={Sdata[5].title} /> */}
                {
                  Sdata.map((items , index)=>{
                    return (
                      <Card imgSrc={items.imgsrc} text={items.title} key={index} />
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
