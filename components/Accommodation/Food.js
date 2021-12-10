import React from 'react';
import Image from 'next/image';

const Food = (props) => {
    return (
        <>
            <div className="reusable-card">
                <div className="card-image">
                    <a href={props.food.website} target="_blank" rel="noreferrer"><img src={props.food.img} alt={props.food.name} className="grayscale"/></a>
                </div>
                <div className="card-text">
                    <p className="card-title">{props.food.name}</p>
                    <div className="card-details">
                        <p className="card-information">{props.food.address}</p>
                        <p className="card-information">{props.food.city}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Food;