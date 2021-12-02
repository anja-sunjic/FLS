import Image from "next/image";
import heroimg from "../../public/hero.webp";
export default function Intro() {
    return (
        <>
            <div className="intro hero _venue">
                <div className="hero-img blur">
                    <Image
                        src={heroimg}
                        alt="Futures Leaders Summit"
                        layout="fill"
                        priority="true"
                        placeholder="blur"
                    />
                </div>

                <div className="parking-container container">
                    <div className="title-line">
                        <h2>Parking & Travel</h2>
                        <div className="line-decor is-hidden-touch">
                            <img src="/dots.svg" alt="Futures Leaders Summit" />
                        </div>
                    </div>
                    <div className="information-line">
                        <div className="parking-information">
                            <div className="empty-div" />
                            <div className="parking-details">
                                <p className="parking-text">
                                    Ever since its inception, Bosnia & Herzegovina Futures Foundation has a long term goal to grow to a
                                    community of 10,000 change makers by 2030 who strive for the advancement of quality of life in our country.
                                </p>
                                <div className="travel-information">
                                    <div className="travel-type">
                                        <img src="bus.png" alt="bus" className="travel-icon"/>
                                        <h2 className="travel-type-text">By Bus</h2>
                                        <p>Our mission brings us closer to reaching our vision - by empowering the
                                            youth through education, technology and leadership, we shape the next generation of change makers. </p>
                                    </div>
                                    <div className="travel-type">
                                        <img src="taxi.png" alt="taxi" className="travel-icon"/>
                                        <h2 className="travel-type-text">By taxi</h2>
                                        <p>Our mission brings us closer to reaching our vision - by empowering the youth
                                            through education, technology and leadership, we shape the next generation of change makers. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
