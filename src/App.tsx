import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import "./App.scss"
import SignUp from './pages/auth/signUp/signUp';
import SignIn from './pages/auth/signIn/signIn';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/signUp" component={SignUp} />
        <Route path="/signIn" component={SignIn} />
        <Redirect exact from="/" to="/signUp" />
        <Route render={() => <Redirect to={'/'} />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
