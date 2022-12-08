import React from "react";

export default class Image extends React.Component {
    render() {
        return (
            <>
                {this.props.data.source.map((ele) => <img className="cimg mix" id="about-im" src={ele} alt="" />)}

            </>
        )
    }
}
