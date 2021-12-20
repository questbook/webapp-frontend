import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import QuestHero from "../../components/QuestHero";
import SubquestContent from "../../components/SubquestContent";
import SubquestMenu from "../../components/SubquestMenu";
import SubquestNav from "../../components/SubquestNav";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { useAppContext } from "../../context/state";
import axios from "axios";
import { useEffect } from "react/cjs/react.development";
import tracks from "../../public/data/tracks.json";
export default function Quest({
  data,
  github_url,
  questName,
  trackNameKey,
  trackName,
  level,
}) {
  const {
    setgithubRepoUrl,
    questTitle,
    setquestTitle,
    questDetails,
    setquestDetails,
    subquestTitles,
    setsubquestTitles,
    subQuestContent,
    setsubQuestContent,
    setcurrentQuestName,
    setgithubRawUrl,
    setcurrentTrackNameKey,
    setcurrentTrackName,
    setcurrentQuestLevel,
  } = useAppContext();

  const { showMenu, setShowMenu } = useAppContext();

  useEffect(() => {
    setcurrentQuestName(questName);
    setgithubRawUrl(github_url);
    setcurrentTrackNameKey(trackNameKey);
    setcurrentTrackName(trackName);
    setcurrentQuestLevel(level);
  }, [github_url, questName, trackNameKey, trackName, level]);

  useEffect(() => {
    if (github_url && data) {
      const baseRepoUrl = github_url;
      setgithubRepoUrl(
        `https://github.com/${github_url.split("/")[3]}/${
          github_url.split("/")[4]
        }`
      );
      const fullquestMd = data.replaceAll(
        /\(\.?\/learn_src\/learn_assets/g,
        `\(${baseRepoUrl}/learn_src/learn_assets`
      );
      let questTitleMd = [];
      let questDetailsMd = [];
      let subquestTitlesMd = [];
      let subQuestContentMd = [];

      fullquestMd.split("\n").map((line, index) => {
        if (line.startsWith("# ")) {
          questTitleMd.push(line);
          subquestTitlesMd.push("## Introduction");
        } else if (line.startsWith("## ")) {
          subquestTitlesMd.push(line);
        } else if (subquestTitlesMd.length === 0 && questTitleMd.length > 0) {
          questDetailsMd.push(line);
        } else if (subquestTitlesMd.length > 0) {
          subQuestContentMd[subquestTitlesMd.length - 1] = `${
            subQuestContentMd[subquestTitlesMd.length - 1]
              ? `${subQuestContentMd[subquestTitlesMd.length - 1]}\n`
              : ""
          }${line}`;
        }
      });
      setquestTitle(questTitleMd[0]);
      setquestDetails(questDetailsMd.join("\n"));
      setsubquestTitles(subquestTitlesMd);
      setsubQuestContent(subQuestContentMd);
    }
  }, [data]);
  return (
    <>
      <Head>
        <title>Questbook</title>
        <link rel="icon" href="/images/qb_menu_logo.svg" />
      </Head>
      <Header />
      <QuestHero />
      <main className="container mx-auto flex flex-row h-auto  lg:mt-16 mb-8">
        <SubquestMenu />
        <div className="flex flex-col xl:basis-3/4 w-full overflow-auto">
          <button
            onClick={() => setShowMenu(true)}
            className={`${
              showMenu ? "lg:hidden" : "lg:flex w-fit"
            } hidden items-center space-x-2 ml-8`}
          >
            <span className="font-Inter font-bold text-base text-[#7A64F6]">
              Show quests
            </span>
            <ArrowRightIcon className=" w-4 h-6 inline text-[#7A64F6]" />
          </button>
          <SubquestContent />
          <SubquestNav />
        </div>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  // console.log(tracks);
  console.log(Object.keys(tracks));
  const paths = Object.values(tracks).map((track) =>
    track?.quests.map((quest) => ({
      params: { questNameSlug: quest?.slug },
    }))
  )[0];
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { questNameSlug } = context.params;
  let res, quest, trackNameKey;

  Object.entries(tracks).forEach(([key, track]) => {
    quest = track?.quests.find((quest) => quest?.slug === questNameSlug);
    if (quest !== undefined) {
      trackNameKey = key;
    }
  });
  const { questName, github_url, level } = quest;
  const { trackName } = tracks[trackNameKey];
  const baseRepoUrl = github_url;
  if (!github_url) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  try {
    res = await axios.get(`${baseRepoUrl}/LEARN.md`);
    console.log(res);
  } catch (error) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  if (!res.data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      data: res.data,
      github_url,
      questName,
      trackNameKey,
      trackName,
      level,
    },
  };
}