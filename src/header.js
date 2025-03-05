import React from "react";
import flowUpImage from './LOGO/flowUp.png'
import style from './header.module.css'

function Header(){
    return(
    <header>
        <div className={style.container}>
            <h1>Improve your progress with us</h1>
            <img src={flowUpImage} alt="App Logo" />
        </div>
    </header>
    )
}

export default Header