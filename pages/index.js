import Head from "next/head";
import CommunitySection from "../components/CommunitySection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MobileSection from "../components/MobileSection";
import PartnersSection from "../components/PartnersSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Questbook</title>
        <link rel="icon" href="/qb_menu_logo.svg" />
      </Head>
      <Header />
      <Hero />
      <MobileSection />
      <CommunitySection />
      <PartnersSection />
      <Footer />
    </>
  );
}
