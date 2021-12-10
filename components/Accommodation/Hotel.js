import React from 'react';
import Image from 'next/image';

const Hotel = (props) => {
    return (
        <>
            <div className="reusable-card">
                <div className="card-image">
                    <a href={props.hotel.website} target="_blank" rel="noreferrer"><img src={props.hotel.img} alt={props.hotel.name} className="grayscale"/></a>
                </div>
                <div className="card-text">
                    <p className="card-title">{props.hotel.name}</p>
                    <div className="card-details">
                        <p className="card-information">{props.hotel.price}</p>
                        <p className="card-information">{props.hotel.address}</p>
                        <p className="card-information">{props.hotel.city}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hotel;