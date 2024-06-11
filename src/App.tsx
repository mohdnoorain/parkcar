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
import ForgotPassword from './pages/auth/forgotPassword/ForgotPassword';
import Home from './pages/user/Home/Home';
import VerifyPassword from './pages/auth/verifyOtp/VerifyPassword';
import ResetPassword from './pages/auth/resetPassword/ResetPassword';


setupIonicReact();

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/signUp" component={SignUp} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/forgotPassword" component={ForgotPassword} />
        <Route path="/otpPage" component={VerifyPassword} />
        <Route path="/resetPassword" component={ResetPassword} />
        <Route path="/home" component={Home} />
        <Redirect exact from="/" to="/signUp" />
        <Route render={() => <Redirect to={'/'} />} />
      </IonRouterOutlet>

    </IonReactRouter>
  </IonApp>
);

export default App;
