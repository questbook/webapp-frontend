import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from 'components/Common/Header';
import TrackListHero from 'components/TrackList/TrackListHero';
import Footer from 'components/Common/Footer';
import CourseGrid from 'components/Common/CourseGrid';
import { useEffect } from 'react';
import { useAppContext } from 'context/state';
export default function TrackList({ trackList }) {
  const router = useRouter();
  const { setTrackList } = useAppContext();
  useEffect(() => {
    setTrackList(trackList);
  }, [setTrackList, trackList]);
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Tracks | Questbook</title>
        <link
          rel="canonical"
          href={`https://openquest.xyz${router.pathname}`}
        />
        <meta property="og:title" content="Tracks | Questbook Learn Web3" />
        <meta
          property="og:url"
          content={`https://openquest.xyz${router.pathname}`}
        />
        <meta name="twitter:title" content="Questbook Learn Web3" />
        <link rel="icon" href="/images/qb_menu_logo.svg" />
      </Head>
      <Header />
      <TrackListHero />
      <main className={`container my-16  mx-auto`}>
        <CourseGrid />
      </main>
      <Footer cname="mt-auto" />
    </div>
  );
}

export async function getServerSideProps() {
  let tracks = await fetch('http://localhost:3000/api/data');
  if (!tracks) {
    return {
      props: {
        notFound: true,
      },
    };
  }
  tracks = await tracks.json();
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
