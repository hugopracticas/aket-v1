import React from "react";
import "../styles/home.css";
import hero from "../img/image-hero.png";
import { Footer } from "./Footer/Footer.jsx";
import { CardsHome } from "./Home/CardsHome.jsx";
import { MedicalServices } from "./Home/MedicalServices.jsx";

export const Home = () => {
  return (
    <>
      <div className="background">
        <div className="container">
          <div className="weCare">
            Cuidamos de las personas
            <br />
            afectadas por el cancer.
          </div>
          <div className="people">
            <img src={hero} alt="imagen" />
          </div>
        </div>
      </div>
      <CardsHome />
      <MedicalServices />
      <Footer />
    </>
  );
};
