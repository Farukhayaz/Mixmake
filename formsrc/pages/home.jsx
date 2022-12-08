import React from "react";
import { Link } from "react-router-dom"
import img from "../images/b.png"
const Home = () => {




    return (
        <div className="container-fluid  d-flex align-items-center  text-white" style={{ height: "100vh", backgroundImage: `url(${img})`, backgroundSize: "100% 100%" }}>
            <div className="container  " style={{ width: "55%" }}>
                <div className="row text-center">
                    <h1 className="w-100  p-2" style={{ fontSize: "60px" }}>Form</h1>
                </div>
                <form style={{ marginLeft: "14%" }} >
                    <Link to="/signup"><button style={{ width: "80%", height: "7vh", marginBottom: "15px", backgroundColor: "#440E7B", color: "white" }}>sign up</button></Link>
                    <Link to="/signin"> <button style={{ width: "80%", height: "7vh", marginBottom: "15px", backgroundColor: "#440E7B", color: "white" }}>sign in</button></Link>

                </form>
            </div>
        </div>




    )
}

export default Home