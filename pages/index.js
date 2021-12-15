import Head from "next/head";
import CommunitySection from "../components/CommunitySection";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MobileSection from "../components/MobileSection";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <Head>
          <title>Questbook</title>
          <link rel="icon" href="/qb_menu_logo.svg" />
        </Head>
        <Header />
        <Hero />
      </div>
      <MobileSection />
      <CommunitySection />
    </>
  );
}
