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
import EmailRecoveryPage from "./pages/auth/passwordFortgotPage/passwordForgotPage";
import OtpPage from './pages/auth/verifyOtp/verifyPassword';
import CreateNewPassword from './pages/auth/resetPassword/resetPassword';
import ForgotPassword from './pages/auth/forgotPassword/ForgotPassword';
import Home from './pages/user/Home/Home';


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/signUp" component={SignUp} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/forgotPassword" component={ForgotPassword} />
        <Route path="/OtpPage" component={OtpPage} />
        <Route path="/createpassword" component={CreateNewPassword} />
        <Route path="/home" component={Home} />
        <Redirect exact from="/" to="/signUp" />
        <Route render={() => <Redirect to={'/'} />} />
      </IonRouterOutlet>

    </IonReactRouter>
  </IonApp>
);

export default App;
