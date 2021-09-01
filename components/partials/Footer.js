export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="inner">
          <div className="logo"></div>
          <span>Powered by</span>
          <a href="https://www.bhfuturesfoundation.org/">
            <img src="/bhff.logo.png" alt="" className="logo" />
          </a>
          <div className="btn">
            <span>Contact Us</span>
          </div>
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
