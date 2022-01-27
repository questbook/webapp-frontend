import { useEffect } from 'react';
import Head from 'next/head';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import TrackHero from '../../components/TrackHero';
import Quests from '../../components/Quests';
import TrackHeroInfoVertical from '../../components/TrackHeroInfoVertical';
// import tracks from "../../public/data/tracks.json";
import { useAppContext } from '../../context/state';
import { useRouter } from 'next/router';

export default function Track({ track, trackNameKey }) {
  const router = useRouter();
  const {
    setQuests,
    setcurrentTrackDesc,
    setcurrentTrackNameKey,
    setcurrentTrackName,
    currentTrackName,
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
        <title>{`${currentTrackName} | Questbook`}</title>
        <link rel="canonical" href={`https://openquest.xyz${router.asPath}`} />
        <meta
          property="og:title"
          content={`${currentTrackName} | Questbook Learn Web3`}
        />
        <meta
          property="twitter:title"
          content={`${currentTrackName} | Questbook Learn Web3`}
        />
        <meta
          property="og:url"
          content={`https://openquest.xyz${router.asPath}`}
        />
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

export async function getServerSideProps({ params }) {
  let tracks = await fetch('http://localhost:3000/api/data');
  if (!tracks) {
    return {
      props: {
        notFound: true,
      },
    };
  }
  tracks = await tracks.json();
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
