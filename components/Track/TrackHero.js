import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowCircleLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/outline';
import TrackHeroInfo from './TrackHeroInfo';
import { useAppContext } from 'context/state';

function TrackHero() {
  const { currentTrackName, currentTrackNameKey, currentTrackDesc } =
    useAppContext();

  return (
    <>
      <section
        className={` relative w-full  pt-8 pb-24 overflow-x-clip bg-track-hero-gradient mb-20  lg:mb-12  `}
      >
        <div
          className={` container flex-col space-y-4 mx-auto relative px-8  flex  `}
        >
          <div
            className={` hidden lg:flex lg:flex-row lg:items-center lg:space-x-1`}
          >
            <Link passHref href="/tracks">
              <a className="font-Inter text-base font-normal text-white opacity-60">
                All tracks
              </a>
            </Link>
            <ChevronRightIcon className="text-white opacity-75  w-4 h-[18px]" />
            <span className="font-Inter text-base font-semibold text-white">
              {currentTrackName}
            </span>
          </div>
          <Link passHref href="/tracks">
            <ArrowCircleLeftIcon className="lg:hidden w-7 h-7 text-white" />
          </Link>
          <h4
            className={` font-Inter font-medium text-sm px-4 py-2 bg-[#FFC700] w-fit rounded text-[#323232]`}
          >
            Most Popular
          </h4>
          <h2
            className={` font-Inter text-3xl lg:text-5xl font-bold tracking-tight text-white w-80 sm:w-[30rem] `}
          >
            {currentTrackName}
          </h2>
          <p
            className={` font-Inter    text-base leading-7 text-white text-opacity-75 lg:w-[41rem] `}
          >
            {currentTrackDesc}
          </p>
          <div
            className={` absolute  -right-7 lg:right-20 -top-7 lg:top-0   lg:-bottom-8 rotate-12 `}
          >
            <div className={` relative  w-24 lg:w-56  h-24 lg:h-60 `}>
              <Image
                alt="alt"
                src={`/images/${currentTrackNameKey}.png`}
                layout="fill"
                className=" shadow-[4px_38px_43px_rgba(0,0,0,0.2)]"
              />
            </div>
          </div>
        </div>
        <TrackHeroInfo cname={`lg:hidden`} />
      </section>
    </>
  );
}

export default TrackHero;
