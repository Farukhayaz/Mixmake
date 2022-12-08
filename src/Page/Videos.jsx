import React from "react";
import Heading from "../Components/Heading";
import Navbar from "../Components/Navbar";
import { NavItems } from "./Store";
import Para from "../Components/Paragraph";
import Card from "../Components/Card";
export default class Photos extends React.Component {
    render() {
        return (
            <>
                <div className="container-fluid text-white bg-dark" style={{ height: "auto" }}>
                    <div className="container pb-5">
                        <Navbar data={{ class: "photoSection mb-5 pt-4 ", ListData: NavItems.Navli }} />
                        <div className="row text-center d-flex justify-content-center" style={{ marginTop: "30px" }}>
                            <Heading Header={{ class: "mixeshead mt-3 mb-3", h: "Videos" }} />
                        </div>
                        <div className="row d-flex justify-content-around " style={{ marginTop: "30px", height: "auto" }}>
                            <div className="ca col-lg-5 text-center d-flex justify-content-center mb-5 flex-column" >
                                <Card card={{ class: "mixehead", g: "Sorry" }} />
                                <Para prg={{ class: "aboutpara ", p: "This video does not exist." }} />

                            </div>
                            <div className="ca col-lg-5 text-center  mb-5 d-flex justify-content-center  flex-column">
                                <Card card={{ class: "mixehead", g: "Sorry" }} />
                                <Para prg={{ class: "aboutpara", p: "This video does not exist." }} />

                            </div>
                            <div className="ca col-lg-5 text-center  mb-5 d-flex justify-content-center  flex-column">
                                <Card card={{ class: "mixehead", g: "Sorry" }} />
                                <Para prg={{ class: "aboutpara", p: "This video does not exist." }} />

                            </div>
                            <div className="ca col-lg-5 text-center  mb-5 d-flex justify-content-center  flex-column">
                                <Card card={{ class: "mixehead", g: "Sorry" }} />
                                <Para prg={{ class: "aboutpara", p: "This video does not exist." }} />

                            </div>

                        </div>


                    </div>
                </div>
            </>
        )
    }
}
