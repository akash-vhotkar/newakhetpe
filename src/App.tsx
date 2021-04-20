import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { settingsOutline, peopleOutline,
 homeOutline, walletOutline, headsetOutline } from 'ionicons/icons';
import Home from './pages/Home';
import Setting from './pages/Setting';
import Friends from './pages/Friends';
import Wallet from './pages/Wallet';
import Volume from './pages/Volume';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/setting">
            <Setting />
          </Route>
          <Route exact path="/friends">
            <Friends />
          </Route>
          <Route exact path="/wallet">
            <Wallet />
          </Route>
          <Route exact path="/volume">
            <Volume />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="setting" href="/setting">
            <IonIcon icon={settingsOutline} />
          </IonTabButton>
          <IonTabButton tab="friends" href="/friends">
            <IonIcon icon={peopleOutline} />
          </IonTabButton>
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeOutline} />
          </IonTabButton>
          <IonTabButton tab="wallet" href="/wallet">
            <IonIcon icon={walletOutline} />
          </IonTabButton>
          <IonTabButton tab="volume" href="/volume">
            <IonIcon icon={headsetOutline} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
