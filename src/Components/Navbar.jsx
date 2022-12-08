import React from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component {
    render() {
        console.log(this.props.data.class, "test");
        return (
            <>
                <ul className={this.props.data.class}>
                    {this.props.data.ListData.map((ele, i) => {
                        return <Link to={ele == "Header" ? "/" : `/${ele}`} key={i}>{ele}</Link>
                    })}
                </ul>
            </>
        )
    }
}
