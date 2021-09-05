export default function Navbar() {
    return (
      <>
        <div>
            <nav>
              <div className="container">
                <input id="nav-toggle" type="checkbox"></input>
                  <ul className="links">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Speakers</a></li>
                      <li><a href="#">Sponsors</a></li>
                      <li><a href="#">Contact us</a></li>
                  </ul>
                  <label htmlFor="nav-toggle" className="icon-burger">
                      <div className="line"></div>
                      <div className="line"></div>
                      <div className="line"></div>
                  </label>
              </div> 
            </nav>
        </div>
      </>
    );
  }