import React  from 'react';
import {Link} from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <>
      <ul className={this.props.data.class}>
        {this.props.data.ListData.map((ele,i)=>{
            return<Link to={`/${ele}`}>{ele}</Link>
        })}
      </ul>
      </>
    )
  }
}
