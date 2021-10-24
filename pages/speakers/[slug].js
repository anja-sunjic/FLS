import React, { useEffect, useState } from "react";
import MetaData from "../../components/partials/seo-meta";
import Footer from "../../components/partials/Footer";
import Header from "../../components/partials/Header";
import Decor from "../../components/partials/Decor";
import { useRouter } from "next/router";

import { speakers } from "../../data/speakers";
import Body from "../../components/Speaker/Body";
import Intro from "../../components/Speaker/Intro";

export default function ServiceEntry(props) {
  const router = useRouter();
  const [speaker, setSpeaker] = useState();
  const [loading, setLoading] = useState(true);
  const {
    query: { slug },
  } = router;
  useEffect(() => {
    setSpeaker(speakers.filter((x) => x.slug === slug));
    setLoading(false);
  }, [slug]);
  return (
    <>
      {!loading && (
        <>
          <MetaData
            path="/speakers"
            title={speaker[0].name}
            description=""
            image="/share.png"
          />
          <div className="_main speaker-single">
            <h1 className="is-hidden">{speaker[0].name}</h1>
            <Header />
            <Intro />
            <Body speaker={speaker[0]} />
            <Decor />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export async function getStaticProps({ params }) {
  const page = speakers.find((speaker) => speaker.slug === params.slug) || {
    notfound: true,
  };
  return { props: { page } };
}

export async function getStaticPaths() {
  const paths = speakers.map((speaker) => {
    const slug = speaker.slug;

    return { params: { slug } };
  });
  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
}
