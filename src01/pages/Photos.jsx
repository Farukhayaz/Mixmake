import React, { Component } from 'react'
import { NavItems } from './Store';
import Navbar from '../Component/Navbar';
import {imagesadress} from "./Store";
import Image from '../Component/Imagees';
import Heading from '../Component/Heading'
import Para from '../Component/Para';

export default class photos extends Component {
  render() {
    return (
    <>
      <div className='photos'>
      <Navbar data={{class:"hero2Section",ListData:NavItems.Navil}}/>
      <Heading Header={{class:"hero3head",h:"PHOTOS"}}/>
      <Image  data={{source:imagesadress.Photos}}/>
      <Para prg={{class:"hero7para",p1:"Download press photo pack with hi-res photos."}}/>
      </div>
      </>
    )
  }
}
