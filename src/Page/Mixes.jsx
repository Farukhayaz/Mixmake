import React from "react";
import Heading from "../Components/Heading";
import Navbar from "../Components/Navbar";
import { NavItems } from "./Store";
import { Aboutimage } from "./Store";
import Image from "../Components/Image";
import Para from "../Components/Paragraph";
export default class Mixes extends React.Component {
    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="container">
                        <Navbar data={{ class: "ab heroSection", ListData: NavItems.Navli }} />
                        <div className="row text-center  d-flex flex-column justify-content-center" style={{ marginTop: "30px" }}>
                            <Heading Header={{ class: "mixeshead", h: "MIXES" }} />
                            <div className="row d-flex justify-content-center">
                                <Image data={{ source: Aboutimage.imgg }} />
                            </div>
                            <Para prg={{
                                class: " mt-2 text-center", p: "Find out more on Soundcloud"
                            }} />
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center " style={{ backgroundColor: "#FFDF00", paddingTop: "40px", marginTop: "40px", paddingBottom: "40px" }} >
                        <Para prg={{
                            class: "aboutparali w-100 text-center", p: <p>"Who is Jack, and what is it that Jack does? <br /> Jack is the one who gives you the power to <br />jack your body!”</p>
                        }} />
                    </div>
                </div>
            </>
        )
    }
}
