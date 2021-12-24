import Image from "next/image";

function TrackListHero() {
  return (
    <>
      <section
        className={` h-[133px] lg:h-[214px]  pt-8 pb-8  w-full overflow-x-clip bg-track-hero-gradient `}
      >
        <div className={` container px-8 h-full mx-auto relative  flex `}>
          <h2
            className={` font-Inter text-3xl lg:text-5xl font-bold tracking-tight text-white w-80 sm:w-[30rem] `}
          >
            All Tracks
          </h2>
          <div
            className={` absolute -right-7 lg:right-20 top-0 lg:top-0   lg:-bottom-8  rotate-12 `}
          >
            <div className={` relative  w-24 lg:w-36  h-24 lg:h-36 `}>
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
