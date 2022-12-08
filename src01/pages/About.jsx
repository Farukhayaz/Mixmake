import React  from 'react'
import Navbar from '../Component/Navbar';
import Heading from '../Component/Heading'
import { NavItems } from './Store';
import Para from '../Component/Para';
import {imagesadress} from "./Store";
import Image from '../Component/Imagees';



export default class About extends React.Component {
  render() {
    return (
      <>
      <div>
      <Navbar data={{class:"heroSection",ListData:NavItems.Navil}}/>
      <Heading Header={{class:"hero2head",h:"ABOUT DJ"}}/>
      <Para prg={{class:"hero3para",p1:"DJ John Doe known as one of the most revered members of the New York breaks scene, John Doe has made it his duty to share",}}/>
      <Para prg={{class:"hero4para",p1:"break beats with a growing global audience! As a member of the Respect roster of artists, his Respect is Burning parties and CD"}}/>
      <Para prg={{class:"hero5para",p1:"series has kept listeners on the pulse of the hot New York breaks scene!"}}/>
      <Image  data={{source:imagesadress.img}}/>
      <Para prg={{class:"hero6para",p1:"Music has always been his passion ever since he was very young. He enjoys doing quality live mixes on the turntables to all types"}}/>
      <Para prg={{class:"hero7para",p1:"of genres. He always wants to satisfy his clients and make sure that they are having a good time with quality services."}}/>
      <Para prg={{class:"hero8para",p1:"With 15 years of experience as a musician, his signature style of mixes and mashups is what makes him pump up the crowd with"}}/>
      <Para prg={{class:"hero9para",p1:"a high demand to crave more!"}}/>
      <Navbar data={{class:"hero1Section",ListData:NavItems.Sliderli}}/>
      <div className="house" >
      <Heading Header={{class:"hero4head",h:"I am, you see, I am the creator"}}/>
      <Heading Header={{class:"hero5head",h:"and this is my house!”"}}/>
      </div>

      



      </div>
      
      </>
    )
  }
}
