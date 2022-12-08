import React from 'react'

export default class Heading extends React.Component {
    render() {
        return (
            <div>
                <h1 className={this.props.Header.class}>
                    {this.props.Header.h}
                    {this.props.Header.h2}

                </h1>
            </div>
        )
    }
}
