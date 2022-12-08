import React from 'react'

export default class Input extends React.Component {
    render() {

        const result = this.props.data ? <input className={this.props.data} style={this.props.data.Style} placeholder={this.props.data.holder} /> : <input style={{ padding: "2px", width: "300px", height: "50px", backgroundColor: "lightgrey", border: "none" }} placeholder="Enter Email" />
        return result
    }
}
