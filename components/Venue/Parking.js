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
                                    Event parking is possible at the premises of BKC Tuzla free of charge. Please have in mind that due to a large volume of
                                    participants and guests, parking slots will be limited. Within 100 meters from the venue, parking is possible at a nearby mall.
                                </p>
                                <div className="travel-information">
                                    <div className="travel-type">
                                        <img src="bus.png" alt="bus" className="travel-icon"/>
                                        <h2 className="travel-type-text">By Bus</h2>
                                        <p>For in-town travel you can use Tuzla Public Transport services. They are cheap and the nearest bus
                                            station is a 5-minute walk from the main venue - BKC Tuzla. More information can be found &nbsp;
                                            <a href="https://www.gipstk.com/" target="_blank" rel="noreferrer" className="link-white-bold-underline">here</a>
                                        </p>
                                    </div>
                                    <div className="travel-type">
                                        <img src="taxi.png" alt="taxi" className="travel-icon"/>
                                        <h2 className="travel-type-text">By taxi</h2>
                                        <p>Another option for in-town travel is by taxi. They have good coverage and are relatively cheap.
                                            Ask a local or your host for recommendations which taxi provider to call.</p>
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
