import React  from 'react'
import { NavItems } from './Store';
import Navbar from '../Component/Navbar';
import {imagesadress} from "./Store";
import Image from '../Component/Imagees';
import Heading from '../Component/Heading'
import Para from '../Component/Para';
import {RiFacebookFill} from "react-icons/ri"
import {BsTwitter} from "react-icons/bs"
import {AiOutlineGooglePlus} from "react-icons/ai"
import {BsInstagram} from "react-icons/bs"
import {AiFillYoutube} from "react-icons/ai"


export default class contacts extends React.Component {
  render() {
    return (
      <>
      <div className='contacts'>
      <Navbar data={{class:"heroSection",ListData:NavItems.Navil}}/>
      <Heading Header={{class:"hero2head",h:"CONTACTS"}}/>
      <Para prg={{class:"hero10para",p1:"I am available for booking. Feel free to contact me."}}/>
      <Para prg={{class:"hero10para",p1:"Email:" ,p:"hello@iamdj.com"}}/>
      <Para prg={{class:"hero10para",p1:"Phone:",p:"+1 (123) 456 7890"}}/>
      <Para prg={{class:"hero10para",p1:"Fax:",p:"+1 (123) 456 7891"}}/>
      </div>
      <div className="snd">
      <Heading Header={{class:"hero2head",h:"SEND ME A MESSAGE"}}/>
      
      <div className="input">
                <input type="text" placeholder="Enter Name" className="inp2 "/>
                <input type="text" placeholder="Enter Email" className="inp2 inp3 "/>
                <input type="text" placeholder="Enter Your Message" className="inp4"/>
                </div>
                <Image  data={{source:imagesadress.btn}}/>

                <div className="follow">
                 <Heading Header={{class:"hero2head",h:"FOLLOW ME"}}/>
                   
            <div className="icns1">
            <RiFacebookFill className="icon"/>
            <BsTwitter className="icon"/>
            <AiOutlineGooglePlus className="icon"/>
            <BsInstagram className="icon"/>  
            <AiFillYoutube className="icon"/>  
            </div>
                    
                </div> 
                <div className="footer">
      <Para prg={{class:"hero10para",p1:"MixMaker - One Page DJ / Producer Responsive Website"}}/>
      <br/>
      <Para prg={{class:"hero10para",p1:"Adobe Muse Template by Vinyljunkie"}}/>

                </div>  

      </div>


      </>
    )
  }
}
