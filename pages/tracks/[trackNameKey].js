import { useEffect } from "react";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TrackHero from "../../components/TrackHero";
import Quests from "../../components/Quests";
import TrackHeroInfoVertical from "../../components/TrackHeroInfoVertical";
import tracks from "../../public/data/tracks.json";
import { useAppContext } from "../../context/state";

export default function Track({ track, trackNameKey }) {
  const {
    setQuests,
    setcurrentTrackDesc,
    setcurrentTrackNameKey,
    setcurrentTrackName,
  } = useAppContext();
  useEffect(() => {
    const { quests, trackName, desc } = track;
    setQuests(quests);
    setcurrentTrackNameKey(trackNameKey);
    setcurrentTrackName(trackName);
    setcurrentTrackDesc(desc);
  }, [track, trackNameKey]);

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Questbook</title>
        <link rel="icon" href="/images/qb_menu_logo.svg" />
      </Head>
      <Header />
      <TrackHero />
      <main
        className={` container my-8 px-8 lg:my-16 h-auto  lg:flex lg:flex-row justify-between  mx-auto`}
      >
        <Quests />
        <TrackHeroInfoVertical />
      </main>
      <Footer cname="mt-auto" />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = Object.keys(tracks).map((trackNameKey) => ({
    params: { trackNameKey },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { trackNameKey } = params;

  if (!trackNameKey && !tracks[trackNameKey]) {
    return {
      props: {
        notFound: true,
      },
    };
  }
  const track = tracks[trackNameKey];
  return {
    props: {
      track,
      trackNameKey,
    },
  };
}
