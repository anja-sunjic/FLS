import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="inner">
          <div className="logo"></div>
          <span>16-18 December 2021 - Tuzla, B&H</span>
          <Link href="/contact">
            <a className="contact-button _shine">
              <span>Contact Us</span>
            </a>
          </Link>
          <div className="sm">
            <span>Follow FLS</span>
            <a href="">
              <img src="/facebook.svg" alt="" />
            </a>
            <a href="">
              <img src="/instagram.svg" alt="" />
            </a>
            <a href="">
              <img src="/linkedin.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}