import React from 'react';
import img from "../Assets/Images/img07.jpg";
import Navbar from '../Component/Navbar';
import Para from '../Component/Para';
import Heading from '../Component/Heading'
import { NavItems } from './Store';
import {RiFacebookFill} from "react-icons/ri"
import {BsTwitter} from "react-icons/bs"
import {AiOutlineGooglePlus} from "react-icons/ai"
import {BsInstagram} from "react-icons/bs"
import {AiFillYoutube} from "react-icons/ai"

export default class Home extends React.Component {
  render() {
    return (
      <>
        <div className="home" style={{height:"125vh",width:"100%",backgroundImage:`url(${img})`,padding: "1px"}}>
            <Navbar data={{class:"heroSection",ListData:NavItems.Navil}}/>
            <div className="pg1">
          <Para prg={{class:"hero1para",p1:"PERFORMANCE CLUB DJ"}}/>
          <Heading Header={{class:"hero1head",h:"MIXMAKE R"}}/>
          <Para prg={{class:"hero2para",p1:"HOUSE • GROOVE • SOUL"}}/>
          </div>
          <div className="icns">
            <RiFacebookFill className="icon"/>
            <BsTwitter className="icon"/>
            <AiOutlineGooglePlus className="icon"/>
            <BsInstagram className="icon"/>  
            <AiFillYoutube className="icon"/>  
            </div>
        </div>
      
      </>
    )
  }
}
