import Head from "next/head";
import Header from "../../components/Header";
import TrackListHero from "../../components/TrackListHero";
import Footer from "../../components/Footer";
import tracks from "../../public/data/tracks.json";
import CourseGrid from "../../components/CourseGrid";
import { useEffect } from "react";
import { useAppContext } from "../../context/state";
export default function TrackList({ trackList }) {
  console.log(trackList);
  const { setTrackList } = useAppContext();
  useEffect(() => {
    setTrackList(trackList);
  }, [trackList]);
  return (
    <>
      <Head>
        <title>Questbook</title>
        <link rel="icon" href="/images/qb_menu_logo.svg" />
      </Head>
      <Header />
      <TrackListHero />
      <main className={`container my-16   h-screen  mx-auto`}>
        <CourseGrid />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const trackList = Object.entries(tracks).map(
    ([trackNameKey, { trackName, cardThumbnail }]) => ({
      trackNameKey,
      trackName,
      cardThumbnail,
    })
  );

  if (!trackList.length) {
    return {
      props: {
        notFound: true,
      },
    };
  }
  return {
    props: {
      trackList,
    },
  };
}
