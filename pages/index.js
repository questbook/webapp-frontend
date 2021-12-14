import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Questbook</title>
        <link rel="icon" href="/qb_menu_logo.svg" />
      </Head>
      <Header />
      <Hero />
    </div>
  );
}
