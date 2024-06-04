import React from "react";
import { image } from "../../db";
import { SubHeading } from "../../Components";
import "./header.css";

const header = () => (
  <div className="app__header app__wrapper" id="home">
    <div className="app__wrapper_img">
      <img src={image.welcome} alt="header_img" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Mediterranean Palate : Delight in Every Bite!.." />
      <h1 className="app__header-h1">
        Indulge in the Essence of Mediterranean Delights!..
      </h1>
      <p className="p_opensans" style={{ margin: "2rem 0" }}>
        Mediterranean food embodies the essence of healthy living with its focus
        on fresh, wholesome ingredients and vibrant, satisfying flavors.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
  </div>
);

export default header;
