import Link from 'next/link';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import SwiperCore, {
	Autoplay, Pagination, Navigation, Scrollbar
} from 'swiper';

SwiperCore.use([Autoplay, Pagination, Navigation, Scrollbar]);

export default function Partners() {
	return (
		<>
			<section className='section partners' id='partners' name='partners'>
				<div className='container'>
					<h2>Sponsors & Partners</h2>
					<Swiper

						spaceBetween={30}
						centeredSlides={true}
						autoplay={{
							"delay": 0,
							"disableOnInteraction": false,
							"pauseOnMouseEnter": true
						}}
						slidesPerView={3}
						speed={2000}
						loop={true}
						loopFillGroupWithBlank={true}
						breakpoints={{
							1024: {
								slidesPerView: 5,
								spaceBetween: 50,
								speed: 2000,
								autoplay: {
									"delay": 0,
									"disableOnInteraction": false,
									"pauseOnMouseEnter": true
								}
							}
						}}
					>
						<SwiperSlide>

							<a target="_blank" href='https://www.bhfuturesfoundation.org/' rel="noreferrer">
								<img className='sponsor-align' src='/partners/BHFF.png' alt='Sponsor Image' alt='Sponsor Image' />
							</a>

						</SwiperSlide>
						<SwiperSlide>
							<a target="_blank" href='https://htecgroup.com/' rel="noreferrer">
								<img className='sponsor-align' src='/partners/htec.png' alt='Sponsor Image' />
							</a>
						</SwiperSlide>
						<SwiperSlide>

							<a target="_blank" href='https://www.dkr.ba/en/' rel="noreferrer">
								<img className='sponsor-align' src='/partners/DKR.png' alt='Sponsor Image' />
							</a>
						</SwiperSlide>
						<SwiperSlide>

							<a target="_blank" href='https://www.porschebh.ba/' rel="noreferrer">
								<img className='sponsor-align' src='/partners/PorscheBHallwhite.png' alt='Sponsor Image' />
							</a>
						</SwiperSlide>
						<SwiperSlide>

							<a target="_blank" href='https://www.epbih.ba/' rel="noreferrer">
								<img className='sponsor-align' src='/partners/epbh.png' alt='Sponsor Image' />
							</a>
						</SwiperSlide>
						<SwiperSlide>

							<a target="_blank" href='https://www.mistral.ba/' rel="noreferrer">
								<img className='sponsor-align' src='/partners/Mistral-new.png' alt='Sponsor Image' />
							</a>
						</SwiperSlide>
						<SwiperSlide>

							<a target="_blank" href='https://tehnograd-company.ba/' rel="noreferrer">
								<img className='sponsor-align' src='/partners/TehnogradCompany.png' alt='Sponsor Image' />
							</a>
						</SwiperSlide>
						<SwiperSlide>

							<a target="_blank" href='https://www.bingotuzla.ba/' rel="noreferrer">
								<img className='sponsor-align' src='/partners/bingo.png' alt='Sponsor Image' />
							</a>
						</SwiperSlide>
						<SwiperSlide>

							<a target="_blank" href='https://bhing.ba/' rel="noreferrer">
								<img className='sponsor-align' src='/partners/bhing.png' alt='Sponsor Image' />
							</a>
						</SwiperSlide>
						<SwiperSlide>

							<a target="_blank" href='https://bhwomen.org/en/home-eng/' rel="noreferrer">
								<img className='sponsor-align' src='/partners/BWBH.png' alt='Sponsor Image' />
							</a>
						</SwiperSlide>
						<SwiperSlide>

							<a target="_blank" href='https://www.ieee.org/' rel="noreferrer">
								<img className='sponsor-align' src='/partners/IEEE.png' alt='Sponsor Image' />
							</a>
						</SwiperSlide>
						<SwiperSlide>

							<a target="_blank" href='https://www.bhfuturesfoundation.org/innovation-nation-2021' rel="noreferrer">
								<img className='sponsor-align' src='/partners/IEEEBH-new.png' alt='Sponsor Image' />
							</a>
						</SwiperSlide>
						<SwiperSlide>

							<a target="_blank" href='https://www.softhouse.se/en/kontakt/sarajevo/' rel="noreferrer">
								<img className='sponsor-align' src='/partners/Softhouse.png' alt='Sponsor Image' />
							</a>
						</SwiperSlide>
						<SwiperSlide>

							<a target="_blank" href='https://liderlab.center/' rel="noreferrer">
								<img className='sponsor-align' src='/partners/LiderLab.png' alt='Sponsor Image' />
							</a>
						</SwiperSlide>
						<SwiperSlide>

							<a target="_blank" href='https://www.zendev.se/en' rel="noreferrer">
								<img className='sponsor-align' src='/partners/ZenDev.png' alt='Sponsor Image' />
							</a>
						</SwiperSlide>
						<SwiperSlide>

							<a target="_blank" href='https://girlthing.ba/' rel="noreferrer">
								<img className='sponsor-align' src='/partners/girlthing.png' alt='Sponsor Image' />
							</a>
						</SwiperSlide>
						<SwiperSlide>

							<a target="_blank" href='https://eestec-tz.ba/' rel="noreferrer">
								<img className='sponsor-align' src='/partners/lctuzla.png' alt='Sponsor Image' />
							</a>
						</SwiperSlide>
						<SwiperSlide>

							<a target="_blank" href='http://www.bitcentar.com/' rel="noreferrer">
								<img className='sponsor-align' src='/partners/bitcentar.png' alt='Sponsor Image' />
							</a>
						</SwiperSlide>
						<SwiperSlide>

							<a target="_blank" href='https://citygecko.solar/' rel="noreferrer">
								<img className='sponsor-align' src='/partners/citygecko.png' alt='Sponsor Image' />
							</a>
						</SwiperSlide>
						<SwiperSlide>

							<a target="_blank" href='http://www.untz.ba/' rel="noreferrer">
								<img className='sponsor-align' src='/partners/untz.png' alt='Sponsor Image' />
							</a>
						</SwiperSlide>
						<SwiperSlide>

							<a target="_blank" href='https://ipi-akademija.ba/' rel="noreferrer">
								<img className='sponsor-align' src='/partners/IPIAkademija.png' alt='Sponsor Image' />
							</a>
						</SwiperSlide>
						<SwiperSlide>

							<a target="_blank" href='http://mf.untz.ba/' rel="noreferrer">
								<img className='sponsor-align' src='/partners/mftz.png' alt='Sponsor Image' />
							</a>
						</SwiperSlide>
						<SwiperSlide>

							<a target="_blank" href=' http://www.fe.untz.ba/' rel="noreferrer">
								<img className='sponsor-align' src='/partners/fetz.png' alt='Sponsor Image' />
							</a>
						</SwiperSlide>
						<SwiperSlide>

							<a target="_blank" href='http://pf.untz.ba/' rel="noreferrer">
								<img className='sponsor-align' src='/partners/pftz.png' alt='Sponsor Image' />
							</a>
						</SwiperSlide>
						<SwiperSlide>

							<a target="_blank" href='http://www.vladatk.kim.ba/ministarstva-tk/ministarstvo-privrede' rel="noreferrer">
								<img className='sponsor-align' src='/partners/MPTK.png' alt='Sponsor Image' />
							</a>
						</SwiperSlide>
						<SwiperSlide>

							<a target="_blank" href='https://radiokameleon.ba/' rel="noreferrer">
								<img className='sponsor-align' src='/partners/Kameleon.png' alt='Sponsor Image' />
							</a>
						</SwiperSlide>
					</Swiper>

					<div className='dots is-hidden-touch'>
						<img src='/dots.svg' alt='Futures Leaders Summit' />
					</div>
					<div className='cta-sec'>
						<h3>FLS&#39;21 IS LOOKING FOR SPONSORS!</h3>
						<Link href='/contact'>
							<a className='contact-button _shine'>
								<span>Become a Sponsor</span>
							</a>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
