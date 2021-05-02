import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ludo from "../assets/ludo.jpeg";
import Chess from "../assets/chess.jpg";
import ChaarParchi from "../assets/chaar-parchi.jpg";
import SolahParchi from "../assets/solah-parchi.jpg";
import Bingo from "../assets/bingo.png";
import Tambola from "../assets/tambola.png";
import TickTock from "../assets/tick-tock.jpg";
import Menu from "../components/Menu";
import "./Slider.css";
import {NavLink} from "react-router-dom";
import { IonContent, IonPage} from "@ionic/react";

const SliderPage: React.FC = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <IonPage>
        <IonContent>
        <Menu />
        <div className="container">
          <div className="row">
            <div className="col-12">
            <Slider {...settings}>
              <NavLink exact to="/slider">
                <img src={Ludo} alt="ludo game" className="img-fluid mx-auto" />
              </NavLink>
              <NavLink exact to="/chess">
                <img src={Chess} alt="ludo game" className="img-fluid mx-auto" />
              </NavLink>
              <NavLink exact to="/slider">
                <img src={ChaarParchi} alt="ludo game" className="img-fluid mx-auto" />
              </NavLink>
              <NavLink exact to="/slider">
                <img src={SolahParchi} alt="ludo game" className="img-fluid mx-auto" />
              </NavLink>
              <NavLink exact to="/bingo">
                <img src={Bingo} alt="ludo game" className="img-fluid mx-auto" />
              </NavLink>
              <NavLink exact to="/tambola">
                <img src={Tambola} alt="ludo game" className="img-fluid mx-auto" />
              </NavLink>
              <NavLink exact to="/ticktock">
                <img src={TickTock} alt="ludo game" className="img-fluid mx-auto" />
              </NavLink>
            </Slider>
            </div>
          </div>
        </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default SliderPage;
