import Header from "./components/header";
import Section1 from "./components/section1";
import "../style/responsev.css";
import PopularCarBox from "./components/Cards";
import Footer from "./components/footer";
import data from "./__mookData__/data";
import React from "react";
import { useState } from "react";
import Card from "./components/Card";
import { useState } from "react";

const App = () => {

  const [newCarData, setCarData] = useState(data);

  let data1 = [];
  
  function likedCar(nimadir) {
    data1 = newCarData.filter((item) => {
      return item.id !== nimadir.id;
    });
    data1.push(nimadir);

    let newArr = [];
    for (let i = 1; i <= data1.length; i++) {
      data1.forEach((e) => {
        e.id == i ? newArr.push(e) : "";
      });
    }
    setCarData(newArr);
  }

  let a = [],
    b = [];
  {
    newCarData.forEach((e) => {
      if (e.ispopular) {
        a.push(<PopularCarBox data={e} likedCar={likedCar} />);
      }
    });
  }
  {
    newCarData.forEach((e) => {
      if (!e.ispopular) {
        b.push(
          <PopularCarBox data={!e.ispopular ? e : ""} likedCar={likedCar} />
        );
      }
    });
  }
  return (
    <div className="body">
      <header>
        <Header
          newCarData={newCarData}
          likedCar={likedCar}
          setCarData={setCarData}
        />
      </header>
      <section className="Section1 d-flex">
        <Section1 />
      </section>
      <section className="CardsSection">
        <Card a={a} b={b} />
        <button className="cardsBtn1 m-top32 j-contentCenter">
          Show more car
        </button>
      </section>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
