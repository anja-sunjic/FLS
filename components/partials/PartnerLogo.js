export default function PartnerLogo(props) {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noreferrer"
      className="partner-logo grayscale"
    >
      <img src={props.img} alt="Futures Leaders Summit" style={props.size ? {height: `${props.size}`} : {height: `4rem`}}/>
    </a>
  );
}
