import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>Questbook</title>
          <link rel="icon" href="/qb_menu_logo.svg" />
        </Head>
      </div>
    </div>
  );
}
