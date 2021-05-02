import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonIcon, IonText, IonButton,IonButtons,IonBackButton } from '@ionic/react';
import { wallet } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';
import './Wallet.css';

const Wallet: React.FC = () => {
  return (
    <IonPage>
      <IonToolbar>
      <IonButtons slot="secondary">
      <IonButtons slot="start">
      <IonBackButton defaultHref="/" />
    </IonButtons>
    <IonTitle>MY WALLET</IonTitle>
    </IonButtons>
    <IonButtons slot="primary">
      <IonButton color="primary">
        <IonIcon slot="icon-only" icon={wallet}/>
      </IonButton>
    </IonButtons>
  </IonToolbar>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonIcon className="ion-icon" icon={wallet}/>
        </IonHeader>
        
        <IonText className="ion-text-center"></IonText>
        <div className="mt-5">
          <div className="d-flex justify-content-center">
        <IonButton color="primary">
        <IonIcon slot="icon-only" icon={wallet}/>
      </IonButton>
      </div>
        <div className="text-center"><h5>TOTAL MONEY</h5></div>
          <IonText className="text-center"><div className="text-center"><h1>00000</h1></div></IonText>
          <div className="d-flex">
          <IonButton shape="round" fill="outline" color="danger">ADD MONEY</IonButton>
          <IonButton shape="round" fill="outline" color="danger">WITHDRAW</IonButton>
          </div>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Wallet;