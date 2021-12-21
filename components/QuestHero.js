import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowCircleLeftIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";
import { useAppContext } from "../context/state";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import tracks from "../public/data/tracks.json";
function QuestHero() {
  const {
    questTitle,
    currentQuestName,
    currentTrackNameKey,
    currentTrackName,
    currentQuestLevel,
  } = useAppContext();
  const sectionRef = useRef();
  const [sectionTop, setSectionTop] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const { setShowMenu } = useAppContext();

  useEffect(() => {
    const { offsetTop, offsetHeight } = sectionRef.current;
    setSectionTop(offsetTop);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`${
          scrollY >= sectionTop ? " lg:h-[210px]" : "lg:h-[300px]"
        }  h-[145px] invisible`}
      ></div>
      <section
        ref={sectionRef}
        className={`${
          scrollY >= sectionTop
            ? "fixed lg:h-[136px] top-12"
            : "fixed lg:h-[302px]"
        } top-12  lg:overflow-y-hidden  py-4 lg:py-8  h-28  w-full overflow-x-clip bg-track-hero-gradient px-4 xl:px-28 transition-[padding]  duration-300 ease-linear  linear  mb-12 z-[9] `}
      >
        <div
          className={` container mx-auto h-full relative  flex flex-row space-x-2 transition-[flex-direction] duration-300 `}
        >
          <Link href={`/track/${currentTrackNameKey}`}>
            <ArrowCircleLeftIcon className="lg:hidden w-7 h-7 text-white" />
          </Link>
          <div
            className={`${
              scrollY >= sectionTop ? "" : "space-y-1"
            } flex flex-col `}
          >
            <div
              className={`${
                scrollY >= sectionTop ? " mb-4 " : "mb-8"
              } hidden lg:flex lg:flex-row lg:items-center lg:space-x-1 `}
            >
              <Link href="/">
                <a className="font-Inter text-base font-normal text-white opacity-60">
                  All courses
                </a>
              </Link>
              <ChevronRightIcon className="text-white opacity-75  w-4 h-[18px]" />
              <Link href={`/track/${currentTrackNameKey}`}>
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
              className={`${
                scrollY >= sectionTop ? "hidden" : ""
              } font-Inter font-medium text-xs px-4 py-1 bg-[#FFC700] w-fit rounded text-[#323232]`}
            >
              {`${currentQuestLevel} Level`}
            </h4>
            <h1
              className={`${
                scrollY >= sectionTop
                  ? "lg:text-xl lg:w-[53rem] line-clamp-3 lg:line-clamp-1 "
                  : "lg:text-3xl lg:w-[44rem] line-clamp-2 lg:line-clamp-3 "
              } font-Inter text-sm sm:text-lg  font-bold  text-white w-56  sm:w-[30rem]   2xl:w-[62rem] `}
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {questTitle}
              </ReactMarkdown>
            </h1>
          </div>
          <div
            className={`${
              scrollY >= sectionTop ? "" : "   lg:top-auto  lg:-bottom-24"
            } absolute -right-8 lg:right-0 sm:right-0  rotate-12 `}
          >
            <div
              className={`${
                scrollY >= sectionTop
                  ? "  lg:w-[84px] lg:h-[86px] "
                  : " lg:w-56  lg:h-60"
              } relative w-12 h-[50px] transition-[width] transition-[height] duration-300 `}
            >
              <Image
                src="/images/ethereum_p.png"
                layout="fill"
                className=" shadow-[4px_38px_43px_rgba(0,0,0,0.2)]"
              />
            </div>
          </div>
        </div>
        <button
          onClick={() => setShowMenu(true)}
          className="absolute lg:hidden -bottom-5 right-8 bg-white text-[#7A64F6] font-Inter font-medium text-xs shadow-md shadow-[0_1px_5px_rgba(146, 163, 201, 0.57)] px-4 py-1 rounded-3xl "
        >
          Show quests <ChevronDownIcon className=" inline w-4 h-6" />
        </button>
      </section>
    </>
  );
}

export default QuestHero;
