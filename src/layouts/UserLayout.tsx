import React from "react";
import { Outlet } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../routes/transitions.scss"


const UserLayout = () => {
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