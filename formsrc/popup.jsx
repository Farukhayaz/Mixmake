import React from "react";

const Popup = props => {

    const pop = JSON.parse(localStorage.getItem("pop"))
    return (

        <div className="popup-box" style={{ position: "absolute", width: "30rem", right: "30%", top: "10vh", backgroundColor: "white", zIndex: "5" }}>
            <div className="box border">
                {props.content}
                <span className="close-icon" onClick={props.handleClose}>
                    <button style={{ cursor: "pointer", marginLeft: "80%", padding: "5px" }}>X</button>

                    {
                        pop.map((ele) => {
                            return (
                                <>
                                    <div className="row w-100 border d-flex justify-content-around align-items-center">
                                        <h4>{ele.id}</h4>
                                        <img style={{ height: "80px", width: "80px" }} src={ele.images[0]} alt="" />
                                        <h2>{ele.category}</h2>
                                    </div>
                                </>
                            )
                        })
                    }

                </span>

            </div>
        </div>

    );
};

export default Popup;