import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from "./Routes";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.nav}>
            <NavLink
                activeClassName={s.active}
                to={PATH.PRE_JUNIOR}>
                PreJunior
            </NavLink>
            <NavLink
                activeClassName={s.active}
                to={PATH.JUNIOR}>
                Junior
            </NavLink>
            <NavLink
                activeClassName={s.active}
                to={PATH.JUNIOR_PLUS}>
                JuniorPlus
            </NavLink>
        </div>
    )
}

export default Header;
