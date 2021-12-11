import React from 'react';
import Image from 'next/image';

const Food = (props) => {
    return (
        <>
            <div className="reusable-card">
                <div className="refreshment-image">
                    <a href={props.refreshment.website} target="_blank" rel="noreferrer"><img src={props.refreshment.img} alt={props.refreshment.name} className="grayscale"/></a>
                </div>
                <div className="card-text">
                    <p className="card-title">{props.refreshment.name}</p>
                </div>
            </div>
        </>
    );
};

export default Food;