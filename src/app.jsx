import React from "react";
import Header from "./Page/Header";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Gigs from "./Page/Gigs";
import Mixes from "./Page/Mixes";
import Photos from "./Page/Photos";
import Videos from "./Page/Videos";

import { Route, Routes } from "react-router-dom";

export default class App extends React.Component {
    render() {
        return (
            <>

                <Routes>
                    <Route path="/" element={<Header />} ></Route>
                    <Route path="/About" element={<About />} ></Route>
                    <Route path="/Gigs" element={<Gigs />} ></Route>
                    <Route path="/Mixes" element={<Mixes />} ></Route>
                    <Route path="/Photos" element={<Photos />} ></Route>
                    <Route path="/Videos" element={<Videos />} ></Route>
                    <Route path="/Contact" element={<Contact />} ></Route>



                </Routes >
            </>
        )
    }
}
