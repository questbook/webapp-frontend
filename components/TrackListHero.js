import { useEffect, useState, useRef } from "react";
import Image from "next/image";

function TrackListHero() {
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
            ? "  h-[70px] lg:h-[110px]"
            : " h-[133px] lg:h-[214px]"
        }  invisible`}
      ></div>
      <section
        ref={sectionRef}
        className={`${
          scrollY >= sectionTop
            ? " h-[60px] lg:h-[100px]   py-4"
            : "h-[133px] lg:h-[214px]  pt-8 pb-8"
        } fixed top-12   w-full overflow-x-clip bg-track-hero-gradient   transition-[padding]  duration-300 ease-linear  linear  mb-12 z-[9] `}
      >
        <div
          className={`${
            scrollY >= sectionTop
              ? "flex-row lg:flex-col space-x-4  lg:space-x-0 lg:space-y-4"
              : "flex-col space-y-4"
          } container px-8 h-full mx-auto relative  flex transition-[flex-direction] duration-300 `}
        >
          <h2
            className={`${
              scrollY >= sectionTop
                ? " text-lg line-clamp-1 "
                : "text-3xl lg:text-5xl"
            } font-Inter font-bold  text-white w-80 sm:w-[30rem] `}
          >
            All Tracks
          </h2>
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
                  : " w-24 lg:w-36  h-24 lg:h-36"
              } relative  transition-[width] transition-[height] duration-300 `}
            >
              <Image
                src={`/images/all_tracks.png`}
                layout="fill"
                className=" shadow-[4px_38px_43px_rgba(0,0,0,0.2)]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TrackListHero;
