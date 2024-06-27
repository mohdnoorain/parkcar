import { RouteObject } from "react-router-dom";
import SignUp from "../pages/auth/signUp/SignUp";
import SignIn from "../pages/auth/signIn/SignIn";
import ForgotPassword from "../pages/auth/forgotPassword/ForgotPassword";
import ResetPassword from "../pages/auth/resetPassword/ResetPassword";
import VerifyPassword from "../pages/auth/verifyOtp/VerifyPassword";
import RedirectTo from "../utilityMethods/RedirectTo";

const AuthRoutes: RouteObject[] = [
    {
        path: "",
        element: <RedirectTo goto="signUp" />
    },
    {
        path: "signUp",
        element: <SignUp />
    },
    {
        path: "signIn",
        element: <SignIn />
    },
    { path: "forgotPassword", element: <ForgotPassword /> },
    { path: "otpPage/:userId/:userEmail", element: <VerifyPassword /> },
    { path: "resetPassword/:userEmail", element: <ResetPassword /> },
]

export default AuthRoutes