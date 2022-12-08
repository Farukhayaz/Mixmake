import React from "react";
import { NavItems } from './Store';
import Navbar from '../Component/Navbar';
import {imagesadress} from "./Store";
import Image from '../Component/Imagees';
import Heading from '../Component/Heading'
import Para from '../Component/Para';

export default class Mixes extends React.Component{
    render(){
        return(
            <>
            <div className='mixes'>
            <Navbar data={{class:"heroSection",ListData:NavItems.Navil}}/>
            <Heading Header={{class:"hero2head",h:"MIXES"}}/>
            <Image  data={{source:imagesadress.mixes}}/>
            <Para prg={{class:"hero10para",p1:"Find out more on Soundcloud"}}/>
                  <div className="house" >
                <Heading Header={{class:"hero4head",h:"Who is Jack, and what is it that Jack does?"}}/>
                <Heading Header={{class:"hero5head",h:"Jack is the one who gives you the power to"}}/>
                <Heading Header={{class:"hero5head",h:"jack your body!”"}}/>
      </div>
            </div>
            </>
        )
    }
}