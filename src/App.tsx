import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import "./App.scss"
import SignUp from './pages/auth/signUp/SignUp';
import SignIn from './pages/auth/signIn/SignIn';
import EmailRecoveryPage from "./pages/auth/passwordFortgotPage/EmailRecoveryPage";
import OtpPage from './pages/auth/passwordFortgotPage/OtpPage';
import CreateNewPassword from './pages/auth/passwordFortgotPage/CreateNewPasswordPage';


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/signUp" component={SignUp} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/recoverypage" component={EmailRecoveryPage} />
        <Route path="/OtpPage" component={OtpPage} />
        <Route path="/createpassword" component={CreateNewPassword} />
        <Redirect exact from="/" to="/signUp" />
        <Route render={() => <Redirect to={'/'} />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
