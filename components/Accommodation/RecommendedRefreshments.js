import React from 'react';
import {Parallax} from "react-scroll-parallax";
import Image from "next/image";
import {refreshments} from "../../data/refreshments";
import Refreshment from "./Refreshment";

const RecommendedHotels = () => {
    return (
        <>
            <div className="_speakers hero small-hero">
                <div className="container">
                    <div className="inner">
                        <div className="title-line">
                            <h2>Recommended Refreshments</h2>
                            <div className="line-decor is-hidden-touch">
                                <img src="/dots.svg" alt="Futures Leaders Summit" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section speakers-all">
                <div className="container">
                    <div className="hotel-container">
                        {
                            refreshments.map((refreshment) => {
                                return <Refreshment refreshment={refreshment} key={refreshment.id}/>
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