import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowCircleLeftIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@heroicons/react/outline';
import { useAppContext } from 'context/state';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

function QuestHero() {
  const {
    questTitle,
    currentQuestName,
    currentTrackNameKey,
    currentTrackName,
    currentQuestLevel,
  } = useAppContext();
  const { setShowMenu } = useAppContext();

  return (
    <>
      <section
        className={` relative  lg:overflow-y-hidden  py-4 lg:py-8   w-full overflow-x-clip bg-track-hero-gradient  mb-12  `}
      >
        <div
          className={` container px-8 mx-auto h-full relative  flex flex-row space-x-2 lg:space-x-0 transition-[flex-direction] duration-300 `}
        >
          <Link passHref href={`/tracks/${currentTrackNameKey}`}>
            <ArrowCircleLeftIcon className="lg:hidden w-7 h-7 text-white" />
          </Link>
          <div className={` flex flex-col space-y-1`}>
            <div
              className={` hidden lg:flex mb-8 lg:flex-row lg:items-center lg:space-x-1 `}
            >
              <Link passHref href="/tracks">
                <a className="font-Inter text-base font-normal text-white opacity-60">
                  All tracks
                </a>
              </Link>
              <ChevronRightIcon className="text-white opacity-75  w-4 h-[18px]" />
              <Link passHref href={`/tracks/${currentTrackNameKey}`}>
                <a className="font-Inter text-base font-normal text-white opacity-60">
                  {currentTrackName}
                </a>
              </Link>
              <ChevronRightIcon className="text-white opacity-75  w-4 h-[18px]" />
              <span className="font-Inter text-base font-semibold text-white">
                {currentQuestName}
              </span>
            </div>
            <h4
              className={` font-Inter font-medium text-xs px-4 py-1 bg-[#FFC700] w-fit rounded text-[#323232]`}
            >
              {`${currentQuestLevel} Level`}
            </h4>
            <ReactMarkdown
              className={` font-Inter lg:text-4xl lg:w-[44rem]   text-sm sm:text-lg tracking-tight font-bold  text-white w-56  sm:w-[30rem]   2xl:w-[62rem] `}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {questTitle}
            </ReactMarkdown>
          </div>
          <div
            className={` absolute    lg:top-auto  lg:-bottom-24 right-0 lg:right-0 sm:right-0  rotate-12 `}
          >
            <div className={` relative  lg:w-56  lg:h-60 w-12 h-[50px]  `}>
              <Image
                alt="alt"
                src={`/images/${currentTrackNameKey}.png`}
                layout="fill"
                className=" shadow-[4px_38px_43px_rgba(0,0,0,0.2)]"
              />
            </div>
          </div>
        </div>
        <button
          onClick={() => setShowMenu(true)}
          className="absolute lg:hidden -bottom-[15%] right-8 bg-white text-[#7A64F6] font-Inter font-medium text-xs shadow-md shadow-[0_1px_5px_rgba(146, 163, 201, 0.57)] px-4 py-1 rounded-3xl "
        >
          Show quests <ChevronDownIcon className=" inline w-4 h-6" />
        </button>
      </section>
    </>
  );
}

export default QuestHero;
