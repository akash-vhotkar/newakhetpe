import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import Play from "../assets/play-button.png";
import Menu from "../components/Menu";
import {NavLink} from "react-router-dom";

const Home: React.FC = () => {
  return (
    <IonPage>
      <Menu />
      <IonContent fullscreen>
        <div className="container">
          <div className="row">
            <div className="col">
              <NavLink exact to="/slider">
                <img src={Play} alt="game play button" className="play-btn" />
              </NavLink>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
