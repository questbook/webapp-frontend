import Head from 'next/head';
import { useRouter } from 'next/router';
import CommunitySection from '../components/CommunitySection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MobileSection from '../components/MobileSection';
import PartnersSection from '../components/PartnersSection';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Questbook</title>
        <link
          rel="canonical"
          href={`https://openquest.xyz${router.pathname}`}
        />
        <meta property="og:title" content="Home | Questbook Learn Web3" />
        <meta
          property="og:url"
          content={`https://openquest.xyz${router.pathname}`}
        />
        <link rel="icon" href="/images/qb_menu_logo.svg" />
      </Head>
      <Header />
      <Hero />
      {/* <MobileSection /> */}
      <CommunitySection />
      <PartnersSection />
      <Footer />
    </>
  );
}
