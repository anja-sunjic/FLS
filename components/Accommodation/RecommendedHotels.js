import React from 'react';
import {Parallax} from "react-scroll-parallax";
import Image from "next/image";
import Hotel from "./Hotel";
import {hotels} from "../../data/hotels";

const RecommendedHotels = () => {
    return (
        <>
            <div className="speakers-all">
                <div className="container">
                    <div className="recommended-title">
                        <h2>Accommodation</h2>
                        <div className="line-decor is-hidden-touch">
                            <img src="/dots.svg" alt="Futures Leaders Summit" />
                        </div>
                    </div>
                    <div className="hotel-container">
                        {
                            hotels.map((hotel) => {
                                return <Hotel hotel={hotel} key={hotel.id}/>
                            })
                        }
                    </div>
                </div>
                <div className="hex-decor is-hidden-touch">
                    <Parallax y={[-10, 35]} x={[0, 0]} tagOuter="figure">
                        <Image src="/hex.svg" alt="decor" height={1000} width={1000} />
                    </Parallax>
                </div>
                <div className="hex-decor-big is-hidden-desktop">
                    <Image src="/hex.svg" alt="decor" layout="fill" />
                </div>
            </div>
        </>
    );
};

export default RecommendedHotels;