import {
  IonApp,
  setupIonicReact
} from '@ionic/react';
import "./App.scss"
import Home from './pages/user/Home/Home';
import { RouterProvider, createBrowserRouter, Outlet, RouteObject } from "react-router-dom";
import AuthLayout from './layouts/AuthLayout';

import UserLayout from './layouts/UserLayout';
import AuthRoutes from './routes/AuthRoutes';

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: AuthRoutes
  },
  {
    path: "/user", element: <UserLayout />,
    children: [
      {
        path: "",
        element: <Home />
      }
    ]
  },
])
setupIonicReact();
const App = () => (
  <IonApp>

    <RouterProvider router={router} />

  </IonApp>
);

export default App;
