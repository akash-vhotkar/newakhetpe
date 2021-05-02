import { IonContent, IonIcon, IonPage } from '@ionic/react';
import { close, ellipseOutline } from 'ionicons/icons';
import Menu from "../../components/Menu";
import './TickTock.css';

const Setting: React.FC = () => {
  return (
    <IonPage>
      <Menu />
      <IonContent fullscreen>
        <div className="grid-container">
           <div className="grid-item"><IonIcon slot="icon-only" className="iconclass"  icon={close}/></div>
           <div className="grid-item"><IonIcon slot="icon-only" className="iconclass" icon={ellipseOutline}/></div>
           <div className="grid-item"><IonIcon slot="icon-only" className="iconclass" icon={close}/></div>  
           <div className="grid-item"><IonIcon slot="icon-only" className="iconclass" icon={close}/></div>
           <div className="grid-item"><IonIcon slot="icon-only"className="iconclass" icon={ellipseOutline}/></div>
           <div className="grid-item"><IonIcon slot="icon-only" className="iconclass" icon={ellipseOutline}/></div>  
           <div className="grid-item"><IonIcon slot="icon-only" className="iconclass" icon={ellipseOutline}/></div>
           <div className="grid-item"><IonIcon slot="icon-only" className="iconclass" icon={close}/></div>
           <div className="grid-item"><IonIcon slot="icon-only" className="iconclass" icon={close}/></div>  
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Setting;