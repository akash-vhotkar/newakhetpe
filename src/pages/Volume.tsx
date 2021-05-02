import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton,IonButtons,IonBackButton,IonIcon } from '@ionic/react';
import { headset, wallet } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Volume.css';

const Volume: React.FC = () => {
  return (
    <IonPage>
      <IonToolbar>
   <IonButtons slot="start">
   <IonBackButton defaultHref="/" />
 
 <IonTitle><h5>HELP&SUPPORT</h5></IonTitle>
 </IonButtons>
 <IonButtons slot="primary">
   <IonButton color="primary">
     <IonIcon slot="icon-only" icon={headset}/>
   </IonButton>
 </IonButtons>
</IonToolbar>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Volume</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Volume page" />
      </IonContent>
    </IonPage>
  );
};

export default Volume;