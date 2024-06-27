import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../routes/transitions.scss"
import { AUTH_TOKEN_KEY } from "../constants/contants";
import RedirectTo from "../utilityMethods/RedirectTo";

const AuthLayout = () => {

    /*check for user authentication token*/
    let tkn = localStorage.getItem(AUTH_TOKEN_KEY);
    if (tkn?.split('.').length == 3) {
        return <RedirectTo goto="/user" />
    }

    return (
        <TransitionGroup>
            <CSSTransition
                classNames="page"
                timeout={300}
            >
                <Outlet />
            </CSSTransition>
        </TransitionGroup>
    );
};


export default AuthLayout