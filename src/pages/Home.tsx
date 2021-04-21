import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import Logo from "../assets/logo.png";
import Gold from "../assets/gold.png";
import Silver from "../assets/silver.png";
import Friend from "../assets/friend.png";
import Play from "../assets/play-button.png";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonToolbar className="ion-toolbar">
          <IonTitle className="ion-title">
            <nav className="navbar px-0">
              <img src={Logo} alt="akhetpe logo" className="logo"/>
              <div className="ml-auto">
              <img src={Gold} alt="akhetpe logo" className="logos"/>
              <img src={Silver} alt="akhetpe logo" className="logos"/>
              <img src={Friend} alt="akhetpe logo" className="logos"/>
              </div>
            </nav>
          </IonTitle>
        </IonToolbar>
      <IonContent fullscreen>
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={Play} alt="game play button" className="play-btn" />
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
