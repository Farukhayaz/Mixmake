import React from "react";
import Heading from "../Components/Heading";
import Para from "../Components/Paragraph";
import { Aboutimage } from "./Store"
import Image from "../Components/Image";
import Navbar from "../Components/Navbar";
import { NavItems } from "./Store";
export default class About extends React.Component {
    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="about container">
                        <Navbar data={{ class: "ab heroSection ", ListData: NavItems.Navli }} />
                        <div className="row text-center d-flex justify-content-center" style={{ marginTop: "70px" }}>
                            <Heading Header={{ class: "about1head ", h: "ABOUT DJ" }} />
                            <Para prg={{ class: "aboutpara", p: "DJ John Doe known as one of the most revered members of the New York breaks scene, John Doe has made it his duty to share break beats with a growing global audience! As a member of the Respect roster of artists, his Respect is Burning parties and CD series has kept listeners on the pulse of the hot New York breaks scene!" }} />
                        </div>
                        <div className="row d-flex justify-content-around" style={{ width: "83%", marginLeft: "9.5%" }}>
                            <Image data={{ source: Aboutimage.imgAddress }} />
                        </div>
                        <div className="row text-left mt-4" style={{ width: "83%", marginLeft: "9.9%" }}>
                            <Para prg={{ class: "aboutpar2 ", p: "Music has always been his passion ever since he was very young. He enjoys doing quality live mixes on the turntables to all types of genres. He always wants to satisfy his clients and make sure that they are having a good time with quality services." }} />
                        </div>
                        <div className="row" style={{ width: "83%", marginLeft: "9.9%" }}>
                            <Para prg={{ class: "aboutpar2 ", p: "With 15 years of experience as a musician, his signature style of mixes and mashups is what makes him pump up the crowd with a high demand to crave more!" }} />
                        </div>
                        <Navbar data={{ class: "aboutSection mb-5 mt-5", ListData: NavItems.Sliderli }} />


                    </div>
                    <div className="row d-flex justify-content-center  " style={{ backgroundColor: "#FFDF00", paddingTop: "40px", marginTop: "40px", paddingBottom: "40px" }} >
                        <Para prg={{
                            class: "aboutparali w-100 text-center", p: <p>"I am, you see, I am the creator, <br /> and this is my house!”</p>
                        }} />
                    </div>
                </div>
            </>
        )
    }
}
