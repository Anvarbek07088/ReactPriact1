import { useState } from "react";
import data from "../__mookData__/data";
import PopularCarBox from "./Cards";
import React from "react";
import Modal from "../__mookData__/modal";

const Card = (a) => {

  // const [opened,setOpen]=useState(false)
 

  // function close(){
  //     setOpen(!opened)
  // }
  return (
    <>
      <div className="PopularCarP1">
        <p>Popular Car</p> <a href="#1">View All</a>
      </div>
      <div className="PopularCarBox">{a.a}</div>
      <div className="RecomindationCarBoxP m-top32">
        <p>Recomindation Car</p>
      </div>
      <div className="RecomindationCarBox">{a.b}</div>
    </>
  );
};

export default Card;
