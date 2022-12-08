import React from 'react'
import { NavItems } from './Store';
import Navbar from '../Components/Navbar';
import { Aboutimage } from "./Store";
// import { ClippyImage } from "./Store"
// import ClippyImage from "./Store"
import ima from "../Images/clippy.PNG"
import Image from '../Components/Image';
import Heading from '../Components/Heading'
import Para from '../Components/Paragraph';
import { RiFacebookFill } from "react-icons/ri"
import { BsTwitter } from "react-icons/bs"
import { AiOutlineGooglePlus } from "react-icons/ai"
import { BsInstagram } from "react-icons/bs"
import { AiFillYoutube } from "react-icons/ai"


export default class Contact extends React.Component {
    render() {
        return (
            <>
                <div className='contacts text-center'>
                    <Navbar data={{ class: "ab heroSection", ListData: NavItems.Navli }} />
                    <Heading Header={{ class: "hero2head text-center pt-3", h: "CONTACTS" }} />
                    <Para prg={{ class: "hero10para", p1: "I am available for booking. Feel free to contact me." }} />
                    <Para prg={{ class: "hero10para", p1: "Email:", p: "hello@iamdj.com" }} />
                    <Para prg={{ class: "hero10para", p1: "Phone:", p: "+1 (123) 456 7890" }} />
                    <Para prg={{ class: "hero10para", p1: "Fax:", p: "+1 (123) 456 7891" }} />
                </div>
                <div className="snd text-center pt-3 pb-5 mb-3">
                    <Heading Header={{ class: "hero2head mb-3", h: "SEND ME A MESSAGE" }} />

                    <div className="input">
                        <input type="text" placeholder="Enter Name" className="inp2 " />
                        <input type="text" placeholder="Enter Email" className="inp2 inp3 " />
                        <input type="text" placeholder="Enter Your Message" className="inp4" />
                    </div>
                    <Image data={{ source: Aboutimage.btn }} />

                </div>
                <div className="follow" style={{ backgroundColor: "#FFDF00" }}>
                    <div className="row " style={{ backgroundImage: `url(${ima})`, backgroundSize: "100% 100%", height: "15vh", width: "207.5vh" }}>
                        {/* <Image data={{ source: ClippyImage.clip }} /> */}

                    </div>

                    <Heading Header={{ class: "contacthead text-center", h: "FOLLOW ME" }} />

                    <div className="row w-50" style={{ marginLeft: "40%", marginTop: "2%", paddingBottom: "3%" }}>
                        <div className="icns d-flex justify-content-between" style={{ width: "40%" }}>
                            <RiFacebookFill className="icon" />
                            <BsTwitter className="icon" />
                            <AiOutlineGooglePlus className="icon" />
                            <BsInstagram className="icon" />
                            <AiFillYoutube className="icon" />
                        </div>
                    </div>

                </div>
                <div className="footer text-white text-center d-flex flex-column " style={{ backgroundColor: "black" }}>
                    <Para prg={{ class: "contactpara  mt-5", p: "MixMaker - One Page DJ / Producer Responsive Website" }} />
                    <Para prg={{ class: "contactpara mb-5", p: "Adobe Muse Template by Vinyljunkie" }} />

                </div>




            </>
        )
    }
}
