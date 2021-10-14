import Link from "next/Link";
export default function CTAsection(props) {
  return (
    <section className="section cta-section is-hidden">
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
