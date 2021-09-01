import Head from "next/head";
const MetaData = (props) => (
  <Head>
    <title>{props.title} | Futures Leaders Summit</title>
    <meta name="description" content={props.description} />

    <meta property="og:type" content="website" />
    <meta
      name="og:title"
      property="og:title"
      content={props.title + " | Futures Leaders Summit"}
    />
    <meta
      name="og:description"
      property="og:description"
      content={props.description}
    />
    <meta property="og:url" content={"https://fls.ba" + props.path} />
    <meta property="og:image" content={props.image} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content={props.title + " | Futures Leaders Summit"}
    />
    <meta name="twitter:description" content={props.desc} />
    <meta name="twitter:image" content={props.image} />

    <link
      rel="canonical"
      href={props.canonical ? props.canonical : "https://fls.ba" + props.path}
    />
  </Head>
);

export default MetaData;