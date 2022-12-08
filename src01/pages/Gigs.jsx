import React  from 'react'
import { NavItems } from './Store';
import Navbar from '../Component/Navbar';
import {imagesadress} from "./Store";
import Image from '../Component/Imagees';
import Heading from '../Component/Heading'

import Para from '../Component/Para';


export default class Gigs extends React.Component {
  render() {
    return (
      <>
      <div className='gig'>
      <Navbar data={{class:"hero2Section",ListData:NavItems.Navil}}/>
      <Heading Header={{class:"hero3head",h:"UPCOMING GIGS"}}/>
      <Image  data={{source:imagesadress.gigs}}/>
      <Para prg={{class:"hero7para",p1:"Subscribe to keep you updated on my upcoming events"}}/>



      </div>
      </>
    )
  }
}
