import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from 'components/Common/Footer';
import Header from 'components/Common/Header';
import QuestHero from 'components/Quest/QuestHero';
import SubquestContent from 'components/Quest/SubquestContent';
import SubquestMenu from 'components/Quest/SubquestMenu';
import SubquestNav from 'components/Quest/SubquestNav';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { useAppContext } from 'context/state';
import axios from 'axios';
import NftClaimModal from 'components/Quest/Modals/NftClaimModal';
import WaitingModal from 'components/Quest/Modals/WaitingModal';
import SuccessModal from 'components/Quest/Modals/SuccessModal';
import { sendAmplitudeData } from 'lib/amplitude';
export default function Quest({
  data,
  github_url,
  questName,
  trackNameKey,
  trackName,
  protocol,
  level,
  desc,
}) {
  const router = useRouter();
  const [showNftClaimModal, setShowNftClaimModal] = useState(false);
  const [showWaitingModal, setShowWaitingModal] = useState(false);
  const {
    githubRepoUrl,
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
    setcurrentQuestDesc,
    setCurrentSubQuest,
    currentSubQuest,
    currentTrackNameKey,
    setcurrentProtocol,
  } = useAppContext();

  const { showMenu, setShowMenu } = useAppContext();

  useEffect(() => {
    setcurrentQuestName(questName);
    setgithubRawUrl(github_url);
    setcurrentTrackNameKey(trackNameKey);
    setcurrentTrackName(trackName);
    setcurrentProtocol(protocol);
    setcurrentQuestLevel(level);
    setcurrentQuestDesc(desc);
    setCurrentSubQuest(0);
  }, [
    github_url,
    questName,
    trackNameKey,
    trackName,
    protocol,
    level,
    desc,
    setcurrentQuestName,
    setgithubRawUrl,
    setcurrentTrackNameKey,
    setcurrentTrackName,
    setcurrentProtocol,
    setcurrentQuestLevel,
    setcurrentQuestDesc,
    setCurrentSubQuest,
  ]);

  useEffect(() => {
    if (window.outerWidth >= 1024) {
      setShowMenu(true);
    }
  }, [setShowMenu]);

  useEffect(() => {
    if (github_url && data) {
      const baseRepoUrl = github_url;
      setgithubRepoUrl(
        `https://github.com/${github_url.split('/')[3]}/${
          github_url.split('/')[4]
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

      fullquestMd.split('\n').map((line, index) => {
        if (line.startsWith('# ')) {
          questTitleMd.push(line);
        } else if (line.startsWith('## ')) {
          subquestTitlesMd.push(line);
        } else if (subquestTitlesMd.length === 0 && questTitleMd.length > 0) {
          questDetailsMd.push(line);
        } else if (subquestTitlesMd.length > 0) {
          subQuestContentMd[subquestTitlesMd.length - 1] = `${
            subQuestContentMd[subquestTitlesMd.length - 1]
              ? `${subQuestContentMd[subquestTitlesMd.length - 1]}\n`
              : ''
          }${line}`;
        }
      });
      subquestTitlesMd.unshift('## Introduction');
      subQuestContentMd.unshift(questDetailsMd.join('\n'));
      console.log(trackNameKey);
      if (
        ['build-on-polygon', 'build-on-near', 'build-on-ethereum'].includes(
          trackNameKey
        )
      )
        subquestTitlesMd.push('## Claim your NFT');
      setquestTitle(questTitleMd[0]);
      setquestDetails(questDetailsMd.join('\n'));
      setsubquestTitles(subquestTitlesMd);
      setsubQuestContent(subQuestContentMd);
    }
  }, [
    data,
    github_url,
    setgithubRepoUrl,
    setquestDetails,
    setquestTitle,
    setsubQuestContent,
    setsubquestTitles,
    trackNameKey,
  ]);
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{`${questName} | Questbook`}</title>
        <link rel="canonical" href={`https://openquest.xyz${router.asPath}`} />
        <meta
          property="og:title"
          content={`${questName} | Questbook Learn Web3`}
        />
        <meta
          property="twitter:title"
          content={`${questName} | Questbook Learn Web3`}
        />
        <meta
          property="og:url"
          content={`https://openquest.xyz${router.asPath}`}
        />
        <link rel="icon" href="/images/qb_menu_logo.svg" />
      </Head>
      <Header />
      <QuestHero />
      <NftClaimModal
        showNftClaimModal={showNftClaimModal}
        setShowNftClaimModal={setShowNftClaimModal}
        setShowWaitingModal={setShowWaitingModal}
      />
      <WaitingModal
        showWaitingModal={showWaitingModal}
        setShowWaitingModal={setShowWaitingModal}
      />
      <SuccessModal />
      <main className="container mx-auto px-8 flex flex-row h-auto  lg:mt-16 mb-8">
        <SubquestMenu />
        <div className="flex flex-col mx-auto  w-full overflow-auto">
          <button
            onClick={() => setShowMenu(true)}
            className={`${
              showMenu ? 'lg:hidden' : 'lg:flex w-fit'
            } hidden items-center space-x-2 mb-2`}
          >
            <span className="font-Inter font-bold text-base text-[#7A64F6]">
              Show quests
            </span>
            <ArrowRightIcon className=" w-4 h-6 inline text-[#7A64F6]" />
          </button>
          <SubquestContent />
          <p
            className={`${
              currentSubQuest === subquestTitles.length - 1 &&
              [
                'build-on-polygon',
                'build-on-near',
                'build-on-ethereum',
              ].includes(currentTrackNameKey)
                ? ''
                : 'hidden'
            } font-Inter font-bold leading-7 text-base text-black pb-10 `}
          >
            Did you complete this quest? Every win counts.{' '}
            <a
              className="text-[#7561EB] cursor-pointer"
              onClick={() => setShowNftClaimModal(true)}
            >
              <span>Earn your NFT.</span>
            </a>
          </p>
          <SubquestNav />
        </div>
      </main>
      <div className=" w-full p-3 mt-auto text-center bg-[#85A1BA]">
        <p className="font-Inter font-normal text-base text-white ">
          This quest is open-source. If you find any issues and want to improve
          the content or contribute in any way, please{' '}
          <a
            onClick={() =>
              sendAmplitudeData('github_repo_visited', {
                repoUrl: githubRepoUrl,
                questName: questName,
              })
            }
            href={githubRepoUrl}
            className="text-[#8BE3FF] underline"
            target="_blank"
            rel="noreferrer"
          >
            <span>fork this repo</span>
          </a>{' '}
          and raise a PR. We appreciate it. :)
        </p>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  let tracks = await fetch('http://localhost:3000/api/data');
  if (!tracks) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  tracks = await tracks.json();
  const { questNameSlug } = context.params;
  let res, quest, trackNameKey;

  Object.entries(tracks).some(([key, track]) => {
    quest = track?.quests.find((quest) => quest?.slug === questNameSlug);
    if (quest !== undefined) {
      trackNameKey = key;
      return true;
    }
  });
  const { questName, github_url, level, desc } = quest;
  const { trackName, protocol } = tracks[trackNameKey];
  const baseRepoUrl = github_url;
  if (!github_url) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  try {
    res = await axios.get(`${baseRepoUrl}/LEARN.md`);
  } catch (error) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  if (!res.data) {
    return {
      redirect: {
        destination: '/',
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
      protocol,
      level,
      desc,
    },
  };
}
