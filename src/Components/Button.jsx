import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <>
                <button className={this.props.btn.class}>
                    {this.props.btn.p}

                </button>
            </>
        )
    }
}
