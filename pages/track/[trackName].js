import { useState, useEffect } from "react";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TrackHero from "../../components/TrackHero";
import Tracks from "../../components/Tracks";
import TrackHeroInfoVertical from "../../components/TrackHeroInfoVertical";

export default function Track() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      console.log("scrollY", scrollY);
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
        <link rel="icon" href="/qb_menu_logo.svg" />
      </Head>
      <Header />
      <TrackHero />
      <main
        className={`${
          scrollY > 48 ? " mt-56" : ""
        } container h-screen lg:flex lg:flex-row  mx-auto`}
      >
        <Tracks />
        <TrackHeroInfoVertical />
      </main>
      <Footer />
    </>
  );
}
