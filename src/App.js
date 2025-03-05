import React from "react";
import Header from './header';
import Navbar from './navbar';
import Home from './MAIN COMPONENTS/home';
import Jobs from './MAIN COMPONENTS/jobs';
import InventoryPage from './MAIN COMPONENTS/inventoryPage';
import CrewInfo from './MAIN COMPONENTS/crewinfo';
import Spare from "./MAIN COMPONENTS/spare";
import {Route, Routes, HashRouter } from 'react-router-dom'
import HFO from "./INVENTORY COMPONENTS/HFO";
import ME from "./INVENTORY COMPONENTS/ME";
import AE from "./INVENTORY COMPONENTS/AE";
import BOILER from "./INVENTORY COMPONENTS/BOILER";
import MAC from "./INVENTORY COMPONENTS/MAC";
import SPARE from "./INVENTORY COMPONENTS/SPARE";




function App(props){

    

    return(
        <React.Fragment>
            <HashRouter>
            
                <Header />
                <Navbar />


                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/inventory/*' element={<InventoryPage items={props.appState.items} />} />
                    <Route path='/jobs' element={<Jobs />} />
                    <Route path='/crewinfo' element={<CrewInfo />} />
                    <Route path='/spare' element={<Spare />} />
                    <Route path='/inventory/HFO' element={<HFO />}></Route>
                    <Route path='/inventory/ME' element={<ME />}></Route>
                    <Route path='/inventory/AE' element={<AE />}></Route>
                    <Route path='/inventory/BOILER' element={<BOILER />}></Route>
                    <Route path='/inventory/MAC' element={<MAC />}></Route>
                    <Route path='/inventory/SPARE' element={<SPARE />}></Route>
                </Routes>
            </HashRouter>
        </React.Fragment>
    )
}

export default App