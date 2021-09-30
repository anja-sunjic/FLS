import Head from "next/head";
const MetaData = (props) => (
  <Head>
    <title>
      {props.title} | {`Futures Leaders Summit'21`}
    </title>
    <meta name="description" content={props.description} />

    <meta property="og:type" content="website" />
    <meta
      name="og:title"
      property="og:title"
      content={props.title + " | Futures Leaders Summit '21"}
    />
    <meta
      name="og:description"
      property="og:description"
      content={props.description}
    />
    <meta property="og:url" content={"https://www.fls.ba" + props.path} />
    <meta property="og:image" content={props.image} />
    <meta property="og:image:width" content="1179" />
    <meta property="og:image:height" content="603" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content={props.title + " | Futures Leaders Summit '21"}
    />
    <meta name="twitter:description" content={props.desc} />
    <meta name="twitter:image" content={props.image} />
    <meta
      name="google-site-verification"
      content="v1kHpF21uv5Qn-WYE3XoHrsIVICwUsTHPlzLPlScrqM"
    />
    <link
      rel="canonical"
      href={
        props.canonical ? props.canonical : "https://www.fls.ba" + props.path
      }
    />
    <link rel="preload" as="image" href="hero.png" />
  </Head>
);

export default MetaData;
