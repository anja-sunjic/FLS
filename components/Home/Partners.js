import Link from 'next/link';
import PartnerLogo from '../partials/PartnerLogo';

export default function Partners() {
	return (
		<>
			<section className='section partners' id='partners' name='partners'>
				<div className='container'>
					<h2>Sponsors & Partners</h2>
					<div className='top-partners'>
						<div className='partner'>
							<span className='role'>Organizer</span>

							<PartnerLogo
								url='https://www.bhfuturesfoundation.org/'
								img='/partners/BHFF.png'
								size='6rem'
							/>
						</div>
						<div className='partner'>
							<span className='role'>Platinum Sponsor</span>
							<PartnerLogo
								url='https://htecgroup.com/'
								img='/partners/htec.png'
							/>
						</div>
						<div className='partner'>
							<span className='role'>Gold Sponsors</span>
							<div className='other'>
								<PartnerLogo
									url='https://www.dkr.ba/en/'
									img='/partners/DKR.png'
									size='3.5rem'
								/>
								<PartnerLogo
									url='https://www.porschebh.ba/'
									img='/partners/PorscheBHallwhite.png'
									size='3.5rem'
								/>
							</div>
						</div>
						<div className='partner'>
							<span className='role'>Silver Sponsor</span>
							<PartnerLogo
								url='https://www.mistral.ba/'
								img='/partners/Mistral.png'
								size='9rem'
							/>
						</div>
						<div className='partner'>
							<span className='role'>Bronze Sponsor</span>
							<PartnerLogo
								url='https://tehnograd-company.ba/'
								img='/partners/TehnogradCompany.png'
								size='9rem'
							/>
						</div>
						<div className='partner'>
							<span className='role'>Organizing Partners</span>
							<a href='https://bhing.ba/' target='_blank' rel='noreferrer'>
								<img
									src='/partners/bhing.png'
									alt='BH ING'
									className='grayscale'
								/>
							</a>
						</div>
						<div className='partner'>
							<span className='role'>Community Partners</span>
							<div className='other'>
								<PartnerLogo
									url='https://bhwomen.org/en/home-eng/'
									img='/partners/BWBH.png'
								/>
								<PartnerLogo
									url='https://www.ieee.org/'
									img='/partners/IEEE.png'
								/>
								<PartnerLogo
									url='https://www.bhfuturesfoundation.org/innovation-nation-2021'
									img='/partners/IEEEBH.png'
								/>
								<PartnerLogo
									url='https://www.softhouse.se/en/kontakt/sarajevo/'
									img='/partners/Softhouse.png'
								/>
								<PartnerLogo
									url='https://liderlab.center/'
									img='/partners/LiderLab.png'
								/>
								<PartnerLogo
									url='https://www.zendev.se/en'
									img='/partners/ZenDev.png'
								/>
							</div>
						</div>
						<div className='partner'>
							<span className='role'>Academic Partner</span>
							<PartnerLogo url='http://www.untz.ba/' img='/partners/untz.png' />
							<PartnerLogo
								url='https://ipi-akademija.ba/'
								img='/partners/IPIAkademija.png'
							/>
						</div>
						<div className='partner'>
							<span className='role'>Media Partner</span>
							<PartnerLogo
								url='https://radiokameleon.ba/'
								img='/partners/Kameleon.png'
							/>
						</div>
					</div>

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
