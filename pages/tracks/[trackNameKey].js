import { useState, useEffect } from "react";
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
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const { quests, trackName, desc } = track;
    setQuests(quests);
    setcurrentTrackNameKey(trackNameKey);
    setcurrentTrackName(trackName);
    setcurrentTrackDesc(desc);
  }, [track, trackNameKey]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Questbook</title>
        <link rel="icon" href="/images/qb_menu_logo.svg" />
      </Head>
      <Header />
      <TrackHero />
      <main
        className={`${
          scrollY > 48 ? "" : ""
        } container my-8 lg:my-16 h-auto lg:flex lg:flex-row  mx-auto`}
      >
        <Quests />
        <TrackHeroInfoVertical />
      </main>
      <Footer />
    </>
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
