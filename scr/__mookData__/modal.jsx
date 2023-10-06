import data from "./data";
import "../../style/cards.css";
import React from "react";
import YurakCards from "../components/img/YurakCards.svg";
import Koenigsegg from "../components/img/Koenigsegg.svg";
import Gas_station from "../components/img/gas-station.svg";
import manulsIcon from "../components/img/manusIcon.svg";
import CardsPeople from "../components/img/profile-2userCards.svg";
import YurakRed from "../components/img/heartQizil.svg";
import "../../style/modal.css";

const Modal = (e) => {
  let { CarIsLike } = e.data;
  const foo = () => {
    const newProp = { ...e.data, CarIsLike: !CarIsLike };
    e.likedCar(newProp);
  };
  if (e) {
    let { CarIsLike, id, CarModel, CarYoqilgi, CarMoney, CarPeopleSoni } =
      e.data;
    return (
      <>
        <div className={"PopularCarBox1Yes"} key={id}>
          <div className="Box1Div1">
            <p>{CarModel}</p>
            <button onClick={foo}>
              <img src={YurakRed} />
            </button>
          </div>

          <p className="box1PSport">Sport</p>

          <div className="CarImgDiv">
            <img src={Koenigsegg} alt="" />
          </div>

          <div className="box1YoqGas">
            <p>
              <img src={Gas_station} alt="" />
              {CarYoqilgi}L
            </p>
            <p>
              <img src={manulsIcon} alt="" />
              Manual
            </p>
            <p>
              <img src={CardsPeople} alt="" />
              {CarPeopleSoni} People
            </p>
          </div>

          <div className="box1BtnMony">
            <p>
              ${CarMoney}/<span>day</span>
            </p>
            <button className="cardsBtn">Rent Now</button>
          </div>
        </div>
      </>
    );
  }
};

export default Modal;
