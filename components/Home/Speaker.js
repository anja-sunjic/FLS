import LinkedIn from "../partials/LinkedIn";
import Image from "next/image";
export default function Speaker(props) {
  return (
    <div className="column is-6">
      <div className="inner">
        <div className="columns is-mobile is-vcentered">
          <div className="column is-narrow">
            <div href="" className="speaker-img">
              <Image
                src={props.img}
                alt=""
                height={230}
                width={200}
                className="grayscale"
                priority={true}
              />
            </div>
          </div>
          <div className="column is-8">
            <div className="speaker">
              <p className="name">{props.name}</p>
              <p className="title">{props.title}</p>
              <LinkedIn url={props.li} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
