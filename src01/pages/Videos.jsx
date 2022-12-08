import React  from 'react'
import { NavItems } from './Store';
import Navbar from '../Component/Navbar';
import Heading from '../Component/Heading'
import Para from '../Component/Para';



export default class videos extends React.Component {
  render() {
    return (
        <>
      <div className='videos'>
      <Navbar data={{class:"hero2Section",ListData:NavItems.Navil}}/>
      <Heading Header={{class:"hero3head",h:"VIDEOS"}}/>

      <div className="box">
        <div className="card">
      <Heading Header={{class:"hero3head",h:"Sorry"}}/>
      <Para prg={{class:"hero7para",p1:"This video does not exist."}}/>

        </div>
        <div className="card">
        <Heading Header={{class:"hero3head",h:"Sorry"}}/>
      <Para prg={{class:"hero7para",p1:"This video does not exist."}}/>

        </div>
        <div className="card">
        <Heading Header={{class:"hero3head",h:"Sorry"}}/>
      <Para prg={{class:"hero7para",p1:"This video does not exist."}}/>

        </div>
        <div className="card">
        <Heading Header={{class:"hero3head",h:"Sorry"}}/>
      <Para prg={{class:"hero7para",p1:"This video does not exist."}}/>
      
        </div>
      </div>

      
        </div>
        </>
    )
  }
}
