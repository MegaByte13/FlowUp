import React from "react";
import style from './navbar.module.css'
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <ul>
                <li><NavLink to='/home' className={({isActive})=>isActive ? style.active : undefined}>HOME</NavLink></li>
                <li><NavLink to='/inventory' className={({isActive})=>isActive ? style.active : undefined}>INVENTORY</NavLink></li>
                <li><NavLink to='/jobs' className={({isActive})=>isActive ? style.active : undefined}>JOBS</NavLink></li>
                <li><NavLink to='/crewinfo' className={({isActive})=>isActive ? style.active : undefined}>CREW-INFO</NavLink></li>
                <li><NavLink to='/spare' className={({isActive})=>isActive ? style.active : undefined}>SPARE</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar