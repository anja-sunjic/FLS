export default function Partners() {
  return (
    <>
      <section className="section partners">
        <div className="container">
          <h2>Sponsors & Partners</h2>
          <div className="top-partners">
            <div className="partner">
              <span className="role">Organizer</span>
              <a href="https://www.bhfuturesfoundation.org/">
                <img src="/partners/BHFF.png" alt="" />
              </a>
            </div>
            <div className="partner">
              <span className="role">Organizing Partner</span>
              <a href="https://bhing.ba/">
                <img src="/partners/bhing.png" alt="" />
              </a>
            </div>
          </div>
          {/* <div className="items">
            <div className="partner">
              <div href="" className="partner-img">
                <img src="./placeholder.png" alt="" />
              </div>
            </div>
            <div className="partner">
              <div href="" className="partner-img">
                <img src="./placeholder.png" alt="" />
              </div>
            </div>
            <div className="partner">
              <div href="" className="partner-img">
                <img src="./placeholder.png" alt="" />
              </div>
            </div>
            <div className="partner">
              <div href="" className="partner-img">
                <img src="./placeholder.png" alt="" />
              </div>
            </div>
          </div> */}
          <a className="contact-button _shine" href="/contact">
            <span>Become a partner</span>
          </a>
        </div>
      </section>
    </>
  );
}
