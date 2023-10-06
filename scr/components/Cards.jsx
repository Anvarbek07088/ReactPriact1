import "../../style/cards.css";
import React from "react";
import YurakCards from "./img/YurakCards.svg";
import Koenigsegg from "./img/Koenigsegg.svg";
import Gas_station from "./img/gas-station.svg";
import manulsIcon from "./img/manusIcon.svg";
import CardsPeople from "./img/profile-2userCards.svg";
import YurakRed from "./img/heartQizil.svg";

const PopularCarBox = (e) => {
    
    let { CarIsLike } = e.data;
    const foo = () => {
        const newProp = { ...e.data, CarIsLike: !CarIsLike };
    e.likedCar(newProp);
  };

  return (
    <>
      <div
        className={e.data.CarIsLike==false ? "PopularCarBox1No" : "PopularCarBox1Yes"}
        key={e.id}
      >
        <div className="Box1Div1">
          <p>{e.data.CarModel}</p>
          <div onClick={foo}>
            <img src={!e.data.CarIsLike ? YurakCards : YurakRed} />
          </div>
        </div>

        <p className="box1PSport">Sport</p>

        <div className="CarImgDiv">
          <img src={Koenigsegg} alt="" />
        </div>

        <div className="box1YoqGas">
          <p>
            <img src={Gas_station} alt="" />
            {e.data.CarYoqilgi}L
          </p>
          <p>
            <img src={manulsIcon} alt="" />
            Manual
          </p>
          <p>
            <img src={CardsPeople} alt="" />
            {e.CarPeopleSoni} People
          </p>
        </div>

        <div className="box1BtnMony">
          <p>
            ${e.data.CarMoney}/<span>day</span>
          </p>
          <button className="cardsBtn">Rent Now</button>
        </div>
      </div>
    </>
  );
};

export default PopularCarBox;
