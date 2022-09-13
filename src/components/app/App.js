import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Home from "../home/Home";
import FormsDisplayed from "../form/FormsDisplayed";
import Restaurants from '../restaurants/Restaurants';
import CombinedDetails from "../details/CombinedDetails";

export default function App() {
    return(
           <Router>
                <div>
                    <Navbar/>
                </div>

                <Routes>
                    <Route exact path="/" element={<Home/>}></Route>
                    <Route exact path="/restaurants" element={<Restaurants/>}></Route>
                    <Route exact path="/restaurants/:restaurantId" element={<CombinedDetails/>}></Route>
                    <Route exact path="/reviewform" element={<FormsDisplayed/>}></Route>
                </Routes>

           </Router>
    )
}
