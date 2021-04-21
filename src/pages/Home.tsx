import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import Logo from "../assets/logo.png";
import Play from "../assets/play-button.png";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonToolbar className="ion-toolbar">
          <IonTitle className="ion-title">
            <nav className="navbar p-0">
              <a className="navbar-brand" href="#">
                <img src={Logo} alt="akhetpe logo" className="logo"/>
              </a>
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
