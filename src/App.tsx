import {
  IonApp,
  setupIonicReact
} from '@ionic/react';
import "./App.scss"
import SignUp from './pages/auth/signUp/SignUp';
import SignIn from './pages/auth/signIn/SignIn';
import ForgotPassword from './pages/auth/forgotPassword/ForgotPassword';
import Home from './pages/user/Home/Home';
import VerifyPassword from './pages/auth/verifyOtp/VerifyPassword';
import ResetPassword from './pages/auth/resetPassword/ResetPassword';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  { path: "/", element: <SignUp /> },
  { path: "/signUp", element: <SignUp /> },
  { path: "/signIn", element: <SignIn /> },
  { path: "/forgotPassword", element: <ForgotPassword /> },
  { path: "/otpPage/:userId/:userEmail", element: <VerifyPassword /> },
  { path: "/resetPassword/:userEmail", element: <ResetPassword /> },
  { path: "/home", element: <Home /> },
])
setupIonicReact();
const App = () => (
  <IonApp>

    <RouterProvider router={router} />

  </IonApp>
);

export default App;
