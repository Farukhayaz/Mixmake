import React from 'react'

export default class Para extends React.Component {
    render() {
        return (
            <div>
                <p className={this.props.prg.class}>
                    {this.props.prg.p1}


                </p>
            </div>
        )
    }
}
