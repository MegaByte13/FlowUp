import React from "react"
import style from './homepage.module.css'

function Home(props){

    return(
        <div className={style.container}>
            <h1>You are welcome!</h1>
            <p>This applications is designed to simplify your job progress during your contract</p>
            <p>Try to use out navigation panel to familiarize more</p>
        </div>
    )
}

export default Home