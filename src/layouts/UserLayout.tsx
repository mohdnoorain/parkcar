import React from "react";
import { Outlet } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../routes/transitions.scss"
import { AUTH_TOKEN_KEY } from "../constants/contants";
import RedirectTo from "../utilityMethods/RedirectTo";


const UserLayout = () => {

    /*check for user authentication token*/
    let tkn = localStorage.getItem(AUTH_TOKEN_KEY);
    if (!(tkn?.split('.').length == 3)) {
        return <RedirectTo goto="/auth" />
    }

    return <>
        <TransitionGroup>
            <CSSTransition

                classNames="page"
                timeout={300}
            >
                <Outlet />
            </CSSTransition>
        </TransitionGroup>
    </>
}

export default UserLayout