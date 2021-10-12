import Image from "next/image";
export default function Intro() {
  return (
    <>
      <div className="_speakers hero">
        <div className="container">
          <div className="inner">
            <div className="title-line">
              <h2>Speaker</h2>
              <div className="line-decor is-hidden-touch">
                <img src="/dots.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
