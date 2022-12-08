import React  from 'react'


export default class Imagees extends React.Component{
  render() {
    return (
     <>
     <div className="pic">

        {this.props.data.source.map((ele,i)=> <img className='set' src={ele} />)}

     </div>
     </>
    )
  }
}
