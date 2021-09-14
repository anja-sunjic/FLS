import Link from "next/link";
import React from "react";
//import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { useRouter } from "next/router";
import useDocumentScrollThrottled from "../../hooks/useDocumentScrollThrottled";

export default function Header() {
  //getter, setter = default state
  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsActiveMenu(!isActiveMenu);
  };

  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

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

  const shadowStyle = shouldShowShadow ? "shadow" : "";
  const hiddenStyle = shouldHideHeader ? "hidden" : "";
  return (
    <>
      <header className={`header ${shadowStyle} ${hiddenStyle}`}>
        <div className="inner">
          <Link href="/">
            <a>
              <img src="logo.svg" alt="" />
            </a>
          </Link>
          <nav>
            <div className="container">
              <input id="nav-toggle" type="checkbox"></input>
              <ul className="links">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#speakers">Speakers</a>
                </li>
                <li>
                  <a href="#partners">Sponsors & Partners</a>
                </li>
              </ul>
            </div>
          </nav>
          <a className="contact-button" href="/contact">
            <span>Contact Us</span>
          </a>
        </div>
      </header>
    </>
  );
}
