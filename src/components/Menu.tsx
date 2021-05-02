import React from "react";
import { IonTitle, IonToolbar } from '@ionic/react';
import Logo from "../assets/logo.png";
import Gold from "../assets/gold.png";
import Silver from "../assets/silver.png";
import Friend from "../assets/friend.png";
import PlayerOption from "../assets/player-option.png";
import './Menu.css';

const Menu: React.FC = () => {
  return (
      <IonToolbar className="ion-toolbar">
          <IonTitle className="ion-title">
            <nav className="navbar px-0">
              <img src={Logo} alt="akhetpe logo" className="logo"/>
              <div className="ml-auto">
              <img src={Gold} alt="akhetpe toolbar options" className="logos"/>
              <img src={Silver} alt="akhetpe toolbar options" className="logos"/>
              <img src={Friend} alt="akhetpe toolbar options" className="logos"/><br />
              <img src={PlayerOption} alt="akhetpe toolbar player select option" className="player-select"/>
              </div>
            </nav>
          </IonTitle>
        </IonToolbar>
  );
};

export default Menu;
