// import { click } from '@testing-library/user-event/dist/click'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
export default function Body() {
    const [Data, setData] = useState([{ title: 'iPhone 9', images: [0] }])
    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then((res) => setData(res.data.products))
    }, [0])
    console.log(Data.products, "data");
    function handling(ele) {
        var products = JSON.parse(localStorage.getItem("pop"))
        console.log(products, "test");
        if (products) {
            var arr = products;
            arr.push(ele)
            localStorage.setItem("pop", JSON.stringify(arr));
        }
        else {
            localStorage.setItem("pop", JSON.stringify([ele]))
        }

    }

    // -------------
    return (
        <>
            {
                Data.map((ele) => {
                    return (
                        <div className="card mt-3" onClick={() => { handling(ele) }} style={{ width: "15rem", height: "55vh" }}>
                            <img src={ele.images[0]} style={{ width: "100%", height: "30vh" }} className="card-img-top" alt="..." />
                            <div className="card-body  d-flex flex-column justify-content-around" style={{ backgroundColor: "#F8F9FA" }}>
                                <h6 className="card-text text-center">{ele.title}</h6>
                                <h6 className="card-text text-center">{ele.category}</h6>
                                <div className="row d-flex justify-content-between" style={{ width: "100%", margin: "auto auto" }}>
                                    <p className="card-text text-center">Price: {ele.price}</p>
                                    <p className="card-text text-center">Discount:{ele.discountPercentage}%</p>

                                </div>


                            </div>
                        </div>

                    )
                })
            }
        </>
    )
}
