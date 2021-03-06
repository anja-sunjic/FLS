import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Collapsible from 'react-collapsible';
import useDocumentScrollThrottled from '../../hooks/useDocumentScrollThrottled';

export default function Header() {
	//getter, setter = default state
	const router = useRouter();

	const toggleMobileMenu = () => {
		setIsActiveMenu(!isActiveMenu);
	};

	const [isActiveMenu, setIsActiveMenu] = useState(false);
	const [shouldHideHeader, setShouldHideHeader] = useState(false);
	const [shouldShowShadow, setShouldShowShadow] = useState(false);
	const [isMobileMenu, setisMobileMenu] = useState(false);
	const MINIMUM_SCROLL = 40;
	const TIMEOUT_DELAY = 200;

	useDocumentScrollThrottled((callbackData) => {
		const { previousScrollTop, currentScrollTop } = callbackData;
		const isScrolledDown = previousScrollTop < currentScrollTop;
		const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

		setShouldShowShadow(currentScrollTop > 2);

		setTimeout(() => {
			setShouldHideHeader(isScrolledDown && isMinimumScrolled);
		}, TIMEOUT_DELAY);
	});

	const shadowStyle = shouldShowShadow ? 'shadow' : '';
	const hiddenStyle = shouldHideHeader ? 'hidden' : '';
	return (
		<>
			<header
				className={`header ${shadowStyle}  ${
					isMobileMenu ? 'active' : 'not-active'
				} ${isMobileMenu ? '' : hiddenStyle}`}
			>
				<div className='inner'>
					<Link href='/'>
						<a className='logo'>
							<img src='/logo.png' alt='Futures Leaders Summit' />
						</a>
					</Link>
					<nav>
						<div className='container'>
							<input id='nav-toggle' type='checkbox' />
							<ul className='links'>
								<li>
									<Link href='/'>Home</Link>
								</li>
								<li className='dropdown-trigger'>
									<Link href='/about'>About</Link>
									<img src='/drop-arrow.png' alt='drop arrow' />
									<div className='dropdown-menu'>
										<div className='dropdown-item'>
											<Link href='/meet-the-team'>Meet the Team</Link>
										</div>
										<div className='dropdown-item'>
											<Link href='/protocols'>
												FLS&#39;21 Health and Safety Protocols
											</Link>
										</div>
									</div>
								</li>
								<li>
									<Link href='/schedule'>Schedule</Link>
								</li>
								<li>
									<Link href='/speakers'>Speakers</Link>
								</li>
								<li>
									<Link href='/sponsors-and-partners'>Sponsors & Partners</Link>
								</li>
								<li className='dropdown-trigger'>
									<Link href='/venue'>Venue</Link>
									<img src='/drop-arrow.png' alt='drop arrow' />
									<div className='dropdown-menu'>
										<div className='dropdown-item'>
											<Link href='/accommodation-food-and-refreshments'>Accommodation, Food & Refreshments</Link>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</nav>
					<Link href='/registration'>
						<a className='contact-button is-hidden-touch'>
							<span>Get Tickets</span>
						</a>
					</Link>
					<div
						className='burger-icon is-hidden-desktop'
						onClick={() => {
							setisMobileMenu(!isMobileMenu);
						}}
					>
						<div className={`btn ${isMobileMenu ? 'active' : 'not-active'}`}>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
			</header>
			{isMobileMenu && (
				<div
					className={`mobile-menu is-hidden-desktop ${
						isMobileMenu ? 'active' : 'not-active'
					}`}
				>
					<ul className='links'>
						<li
							onClick={() => {
								setisMobileMenu(!isMobileMenu);
								window.scrollTo({
									top: 0,
									behavior: 'smooth',
								});
							}}
						>
							<Link href='/'>Home</Link>
						</li>
						<Collapsible
							triggerSibling={() => (
								<Link href='/about'>
									<a
										className='_sibling'
										onClick={() => {
											setisMobileMenu(!isMobileMenu);
										}}
									>
										About
									</a>
								</Link>
							)}
							trigger=' '
						>
							<Link href='/meet-the-team'>
								<a
									className='_sub'
									onClick={() => {
										setisMobileMenu(!isMobileMenu);
									}}
								>
									Meet the Team
								</a>
							</Link>
							<Link href='/protocols'>
								<a
									className='_sub'
									onClick={() => {
										setisMobileMenu(!isMobileMenu);
									}}
								>
									FLS&#39;21 Health and Safety Protocols
								</a>
							</Link>
						</Collapsible>
						<li
							onClick={() => {
								setisMobileMenu(!isMobileMenu);
							}}
						>
							<Link href='/schedule'>Schedule</Link>
						</li>
						<li
							onClick={() => {
								setisMobileMenu(!isMobileMenu);
							}}
						>
							<Link href='/speakers'>Speakers</Link>
						</li>
						<li
							onClick={() => {
								setisMobileMenu(!isMobileMenu);
							}}
						>
							<Link href='/sponsors-and-partners'>Sponsors & Partners</Link>
						</li>
						<Collapsible
							triggerSibling={() => (
								<Link href='/venue'>
									<a
										className='_sibling'
										onClick={() => {
											setisMobileMenu(!isMobileMenu);
										}}
									>
										Venue
									</a>
								</Link>
							)}
							trigger=' '
						>
							<Link href='/accommodation-food-and-refreshments'>
								<a
									className='_sub'
									onClick={() => {
										setisMobileMenu(!isMobileMenu);
									}}
								>
									Accommodation, Food & Refreshments
								</a>
							</Link>
						</Collapsible>
					</ul>
				</div>
			)}
		</>
	);
}
