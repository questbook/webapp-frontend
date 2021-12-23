import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowCircleLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";
import TrackHeroInfo from "./TrackHeroInfo";
import { useAppContext } from "../context/state";

function TrackHero() {
  const { currentTrackName, currentTrackNameKey, currentTrackDesc } =
    useAppContext();
  const sectionRef = useRef();
  const [sectionTop, setSectionTop] = useState(0);
  const [scrollY, setScrollY] = useState(0);

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
          scrollY >= sectionTop
            ? "  h-40  lg:h-[165px]"
            : " h-[583px] sm:h-[480px]  lg:h-[372px]"
        }  invisible`}
      ></div>
      <section
        ref={sectionRef}
        className={`${
          scrollY >= sectionTop
            ? " h-[60px] lg:h-[109px]  py-4"
            : "h-[496px] sm:h-[400px] lg:h-[372px] pt-8 pb-24"
        } fixed top-12   w-full overflow-x-clip bg-track-hero-gradient  transition-[padding]  duration-300 ease-linear  linear  mb-12 z-[9] `}
      >
        <div
          className={`${
            scrollY >= sectionTop
              ? "flex-row lg:flex-col space-x-4  lg:space-x-0 lg:space-y-4"
              : "flex-col space-y-4"
          } container mx-auto relative px-8  flex transition-[flex-direction] duration-300 `}
        >
          <div
            className={`${
              scrollY >= sectionTop ? "" : ""
            } hidden lg:flex lg:flex-row lg:items-center lg:space-x-1`}
          >
            <Link href="/tracks">
              <a className="font-Inter text-base font-normal text-white opacity-60">
                All tracks
              </a>
            </Link>
            <ChevronRightIcon className="text-white opacity-75  w-4 h-[18px]" />
            <span className="font-Inter text-base font-semibold text-white">
              {currentTrackName}
            </span>
          </div>
          <Link href="/tracks">
            <ArrowCircleLeftIcon className="lg:hidden w-7 h-7 text-white" />
          </Link>
          <h4
            className={`${
              scrollY >= sectionTop ? "hidden" : ""
            } font-Inter font-medium text-sm px-4 py-2 bg-[#FFC700] w-fit rounded text-[#323232]`}
          >
            Most Popular
          </h4>
          <h2
            className={`${
              scrollY >= sectionTop
                ? " text-lg line-clamp-1 "
                : "text-3xl lg:text-5xl"
            } font-Inter font-bold tracking-tight text-white w-80 sm:w-[30rem] `}
          >
            {currentTrackName}
          </h2>
          <p
            className={`${
              scrollY >= sectionTop ? "hidden" : "line-clamp-6 lg:line-clamp-4"
            } font-Inter    text-xl text-white text-opacity-75 lg:w-[41rem] `}
          >
            {currentTrackDesc}
          </p>
          <div
            className={`${
              scrollY >= sectionTop
                ? " right-0 lg:right-20 -bottom-6"
                : "-right-7 lg:right-20 -top-7 lg:top-0   lg:-bottom-8"
            } absolute   rotate-12 `}
          >
            <div
              className={`${
                scrollY >= sectionTop
                  ? " w-12 h-[50px] lg:w-[84px] lg:h-[86px] "
                  : " w-24 lg:w-56  h-24 lg:h-60"
              } relative  transition-[width] transition-[height] duration-300 `}
            >
              <Image
                src={`/images/${currentTrackNameKey}.png`}
                layout="fill"
                className=" shadow-[4px_38px_43px_rgba(0,0,0,0.2)]"
              />
            </div>
          </div>
        </div>
        <TrackHeroInfo
          cname={`${scrollY >= sectionTop ? "hidden" : "lg:hidden"}`}
        />
      </section>
    </>
  );
}

export default TrackHero;
