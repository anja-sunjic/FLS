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
                            The Public Institution Bosnian Cultural Center of Tuzla Canton Tuzla (BKC) was founded on November 25, 1997 with its headquarters in Tuzla. It is located in one of the most representative buildings in Mije Keroševića Guje Street No. 3.
                            <br/>
                            <br/>
                            In its long-term work, BKC Tuzla has gained the image of a public institution with international credibility, achieving successful cooperation with many countries in Europe and the world.
                            <br/>
                            <br/>
                            The establishment of BKC was aimed at affirming intellectual and artistic activities, preserving cultural traditions of people and their adequate presentation, bringing together various cultures, and shaping public opinion. From the very beginning, it primarily dealt with important topics and works of contemporary art and cultural heritage through various forms and media.
                            <br/>
                            <br/>
                            BKC Tuzla will serve as the main stage of the Futures Leaders Summit ‘21 covering the opening and closing ceremonies, all keynotes and panel discussions, as well as some partner events.

                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Intro;