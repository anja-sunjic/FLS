export default function Speakers() {
  return (
    <>
      <section className="section speakers">
        <div className="container">
          <h2>Speakers</h2>
          <div className="items">
            <div className="speaker">
              <div href="" className="speaker-img">
                <img src="./placeholder.png" alt="" />
              </div>
              <p className="name">Name</p>
              <p className="title">Title</p>
            </div>
            <div className="speaker">
              <div href="" className="speaker-img">
                <img src="./placeholder.png" alt="" />
              </div>
              <p className="name">Name</p>
              <p className="title">Title</p>
            </div>
            <div className="speaker">
              <div href="" className="speaker-img">
                <img src="./placeholder.png" alt="" />
              </div>
              <p className="name">Name</p>
              <p className="title">Title</p>
            </div>
            <div className="speaker">
              <div href="" className="speaker-img">
                <img src="./placeholder.png" alt="" />
              </div>
              <p className="name">Name</p>
              <p className="title">Title</p>
            </div>
          </div>
          <Link href="/contact">
            <a className="contact-button _shine">
              <span>Become a speaker</span>
            </a>
          </Link>
        </div>
      </section>
    </>
  );
}
