import Head from 'next/head';
import { useRouter } from 'next/router';
import CommunitySection from 'components/Home/CommunitySection';
import Footer from 'components/Common/Footer';
import Header from 'components/Common/Header';
import Hero from 'components/Home/Hero';
import PartnersSection from 'components/Home/PartnersSection';

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
      <CommunitySection />
      <PartnersSection />
      <Footer />
    </>
  );
}
