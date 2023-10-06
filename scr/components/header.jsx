import headerLogo from "./img/MorentLogo.svg";
import data from "../__mookData__/data";
import HeartYurak from "./img/heartYurak.svg";
import notificationImg from "./img/NotificationHeader.svg";
import stingsImg from "./img/Settings.svg";
import profilImg from "./img/Profil.svg";
import searchIcon from "./img/search-normal.svg";
import filterIcon from "./img/filter.svg";
import { useState } from "react";
import Modal from "../__mookData__/modal";
import "../../style/modal.css";

import "../../style/header.css";
const Header = (newCarData) => {
  let c = [];
  newCarData.newCarData.forEach((e) => {
    if (e.CarIsLike) {
      c.push(<Modal data={e} likedCar={newCarData.likedCar} />);
    }
  });
  let modalD = "h0";

  const [newCarData1, setCarData] = useState(data);
  const [openModal, CloseModal] = useState(modalD);
  let X1 = "";

  return (
    <div className="ModalHeader">
      <div className="header d-flex">
        <div className="headerLogo">
          <img src={headerLogo} alt="" className="headerLogo" />
        </div>
        <div className="headerSearch">
          <form action="imput" className="formImput">
            <img src={searchIcon} alt="" className="headerXBtn" />
            <input
              type="text"
              placeholder="Search something here"
              className="headerSearch"
              onChange={(e) => {
                newCarData.setCarData(
                  newCarData1.filter((item) =>
                    item.CarModel.toUpperCase().match(
                      e.target.value.toUpperCase()
                    )
                  )
                );
              }}
            />
            <img src={filterIcon} alt="" className="headerXBtn" />
          </form>
        </div>
        <div className="headerIcon">
          <button
            onClick={() => {
              document.querySelector(".ModalDiv").id == "h0"
                ? (document.querySelector(".ModalDiv").id = "h100")
                : (document.querySelector(".ModalDiv").id = "h0");
            }}
            className="YurakBtn"
          >
            <img src={HeartYurak} alt="" />
          </button>
          <button className="headerXBtn">
            <img src={notificationImg} alt="" />
          </button>
          <button className="headerXBtn">
            <img src={stingsImg} alt="" />
          </button>
          <button>
            <img src={profilImg} alt="" />
          </button>
        </div>
      </div>
      <div className="ModalDiv" id={modalD}>
        <button
          onClick={() => {
            if (document.querySelector(".ModalDiv").id == "h0") {
              document.querySelector(".ModalDiv").id = "h100";
            } else {
              document.querySelector(".ModalDiv").id = "h0";
            }
          }}
          className="X1"
        >
          x
        </button>
        {c}
      </div>
    </div>
  );
};

export default Header;
