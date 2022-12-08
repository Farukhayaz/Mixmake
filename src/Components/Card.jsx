import React from 'react'

export default class Card extends React.Component {
    render() {
        return (
            <div>
                <div className={this.props.card.class}>
                    {this.props.card.g}
                </div>
            </div>
        )
    }
}
