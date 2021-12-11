import React from 'react';
import {Parallax} from "react-scroll-parallax";
import Image from "next/image";
import {foods} from "../../data/food";
import Food from "./Food";

const RecommendedHotels = () => {
    return (
        <>
            <div className="speakers-all">
                <div className="container">
                    <div className="recommended-title">
                        <h2>Food</h2>
                        <div className="line-decor is-hidden-touch">
                            <img src="/dots.svg" alt="Futures Leaders Summit" />
                        </div>
                    </div>
                    <div className="hotel-container">
                        {
                            foods.map((food) => {
                                return <Food food={food} key={food.id}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecommendedHotels;