import React from "react";
import Heading from "../Components/Heading";
import Navbar from "../Components/Navbar";
import { NavItems } from "./Store";
import Para from "../Components/Paragraph";
import { ImageAddress } from "./Store"
import Image from "../Components/Image";

export default class Photos extends React.Component {
    render() {
        return (
            <>
                <div className="container-fluid text-white" style={{ backgroundColor: "black" }}>
                    <div className="container">
                        <Navbar data={{ class: "photoSection ", ListData: NavItems.Navli }} />
                        <div className="row text-center d-flex justify-content-center" style={{ marginTop: "30px" }}>
                            <Heading Header={{ class: "mixeshead", h: "Photos" }} />
                        </div>
                        <div className="row d-flex justify-content-around mt-5 pb-5" style={{ width: "83%", marginLeft: "9.5%" }}>
                            <Image data={{ source: ImageAddress.photos }} />
                        </div>
                        <Para prg={{ class: "aboutpara mb-0 pb-5", p: "Download press photo pack with hi-res photos." }} />

                    </div>
                </div>
            </>
        )
    }
}
