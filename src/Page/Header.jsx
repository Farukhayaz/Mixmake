import React from "react";
import img from "../Images/img07.jpg";
import Navbar from "../Components/Navbar";
import { NavItems } from "./Store";
import Para from "../Components/Paragraph";
import Heading from "../Components/Heading";
import { RiFacebookFill } from "react-icons/ri"
import { BsTwitter } from "react-icons/bs"
import { AiOutlineGooglePlus } from "react-icons/ai"
import { BsInstagram } from "react-icons/bs"
import { AiFillYoutube } from "react-icons/ai"

export default class Header extends React.Component {
    render() {
        console.log(NavItems, "this ain't me")
        return (
            <>
                <div style={{ height: "125vh", width: "100%", backgroundImage: `url(${img})`, paddingTop: "10px", backgroundSize: "100% 100%", textAlign: "center" }}>
                    <Navbar data={{ class: "heroSection", ListData: NavItems.Navli }} />
                    <Para prg={{ class: "hero1para", p: "PERFORMANCE CLUB DJ" }} />
                    <Heading Header={{ class: "hero1head", h: "MIXMAKE  R" }} />
                    <Para prg={{ class: "hero2para", p: "HOUSE • GROOVE • SOUL" }} />
                    <div className="row w-50" style={{ marginLeft: "40%", marginTop: "17%" }}>
                        <div className="icns d-flex justify-content-between" style={{ width: "46%" }}>
                            <RiFacebookFill className="icon" />
                            <BsTwitter className="icon" />
                            <AiOutlineGooglePlus className="icon" />
                            <BsInstagram className="icon" />
                            <AiFillYoutube className="icon" />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
