import {
  IonApp,
  setupIonicReact
} from '@ionic/react';
import "./App.scss"
import { Outlet, RouterProvider, createBrowserRouter, useLocation } from "react-router-dom";
import AuthLayout from './layouts/AuthLayout';

import UserLayout from './layouts/UserLayout';
import AuthRoutes from './routes/AuthRoutes';
import RedirectTo from './utilityMethods/RedirectTo';
import UserRoutes from './routes/UserRoutes';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
    element: <RedirectTo goto="/user" />
  }
]);

setupIonicReact();

const App = () => (
  <IonApp>
    <RouterProvider router={router} />
  </IonApp>
);

export default App;

