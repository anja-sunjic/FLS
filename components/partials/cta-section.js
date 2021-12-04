import Link from "next/link";

export default function CTAsection(props) {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="inner">
          <p className="title">{props.title}</p>
          <Link href={props.url}>
            <a className="contact-button">{props.button}</a>
          </Link>
        </div>
      </div>
    </section>
  );
}
