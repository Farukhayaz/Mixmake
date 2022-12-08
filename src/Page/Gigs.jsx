import React from "react";
import Heading from "../Components/Heading";
import { ImageAddress } from "./Store"
import Navbar from "../Components/Navbar";
import { NavItems } from "./Store";
import Image from "../Components/Image";
import Para from "../Components/Paragraph";
import Input from "../Components/Input";
import Button from "../Components/Button";
export default class Gigs extends React.Component {
    render() {
        return (
            <>
                <div className="container-fluid text-white pt-4" style={{ backgroundColor: "black", height: "auto" }}>
                    <div className="container ">
                        <Navbar data={{ class: "gigsSection", ListData: NavItems.Navli }} />
                        <div className="row text-center d-flex justify-content-center">
                            <Heading Header={{ class: "gigshead", h: "UPCOMING GIGS" }} />
                        </div>
                        <div className=" row gig-images row p-5 d-flex  justify-content-around mt-5" style={{ height: "auto" }}>
                            <div className="col-lg-12 d-flex flex-wrap justify-content-around">
                                <Image data={{ source: ImageAddress.gigs }} />
                            </div>
                        </div>
                        <Para prg={{ class: "gigspara text-center", p: "Subscribe to keep you updated on my upcoming events" }} />
                        <div className="row mt-3 pb-5 d-flex justify-content-around" style={{ width: "45%", marginLeft: "27%" }}>
                            <Input />
                            <Button btn={{ class: "w-25  bg-warning ", p: "Submit" }} />

                        </div>
                    </div>
                </div>
            </>
        )
    }
}
