import {
  IonApp,
  setupIonicReact
} from '@ionic/react';
import "./App.scss"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthLayout from './layouts/AuthLayout';

import UserLayout from './layouts/UserLayout';
import AuthRoutes from './routes/AuthRoutes';
import RedirectTo from './utilityMethods/RedirectTo';
import UserRoutes from './routes/UserRoutes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RedirectTo goto="/auth" />
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: AuthRoutes
  },
  {
    path: "/user",
    element: <UserLayout />,
    children: UserRoutes
  },
  {
    path: "*",
    element: <RedirectTo goto="/home" />
  }
]);

setupIonicReact();

const App = () => (
  <IonApp>
    <RouterProvider router={router} />
  </IonApp>
);

export default App;
