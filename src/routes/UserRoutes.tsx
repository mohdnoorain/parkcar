import { RouteObject } from "react-router-dom";
import RedirectTo from "../utilityMethods/RedirectTo";
import Home from "../pages/user/Home/Home";

const UserRoutes: RouteObject[] = [
    {
        path: "",
        element: <RedirectTo goto="home" />
    },
    {
        path: "home",
        element: <Home />
    }
]

export default UserRoutes