import Link from "next/link";

export default function Purpose() {
  return (
    <>
      <div className="purpose registration">
        <div className="container">
          <div className="_content">
            <div>
              <p>
                All in person attendees will be required to follow the guidelines
                of our health and safety protocol. For in person participation it
                is mandatory to provide one of the following during all three days
                of the event: evidence of full vaccination; or a valid negative
                PCR or antigen test not older than 48h; or proof of COVID-19
                recovery issued by your doctor not older than 6 months. For those
                attendees who would need to do the test, the FLS Organizing Team
                will provide advice and guidelines. <br /> <br /> Read more about
                FLS&#39;21 Health and Safety Protocols <Link href="/protocols"><a className="link-black-bold-underline">here</a></Link>.
              </p>
            </div>
            <div className="health-safety-center">
              <Link href="/protocols">
                <h2>
                  <a className="link-black">FLS&#39;21 HEALTH AND <br /> SAFETY PROTOCOLS</a>
                </h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
