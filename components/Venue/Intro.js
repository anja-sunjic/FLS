import React from 'react';

const Intro = () => {
    return (
        <>
            <div className="intro hero _venue">
                <div className="container">
                    <div className="inner">
                        <div className="title-line">
                            <h2>About the Venue</h2>
                            <div className="line-decor is-hidden-touch">
                                <img src="/dots.svg" alt="Futures Leaders Summit" />
                            </div>
                        </div>
                        <p className="accented-venue">
                            Together with our sponsors and partners, we are giving away Travel Grants for promising STEM students and recent graduates coming from any faculty from Bosnia and Herzegovina.
                            The worth of a maximum Travel Grant is 250 BAM, and it covers your Summit ticket, accommodation (max. three nights) and travel expenses (to and from Tuzla from any town in Bosnia and Herzegovina).
                            More details about the grant's scalability you can find on the Travel Grant Registration Page. >
                            Note: Bosnia and Herzegovina Futures Foundation Senior Scholars and selected volunteers automatically receive the travel grant based on their scholarships and active engagement as volunteers.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Intro;