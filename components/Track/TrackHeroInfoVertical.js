import TrackHeroInfoCard from "./TrackHeroInfoCard";
function TrackHeroInfoVertical() {
  return (
    <div
      className={` hidden lg:flex flex-col justify-center  lg:justify-around lg:basis-4/12 xl:basis-3/12 lg:h-96  lg:rounded-2xl bg-gradient-to-b from-[#F4FAFF] to-[#EEF4F9] `}
    >
      <TrackHeroInfoCard
        text="Always free"
        subtext="Learn whenever, and wherever you want"
        imgSrc={"/images/gear.png"}
        dimensions={[34, 36]}
      />
      <TrackHeroInfoCard
        text="100% online"
        subtext="Start and learn at your own pace"
        imgSrc={"/images/laptop.png"}
        dimensions={[40, 38]}
      />
      <TrackHeroInfoCard
        text="Course completion NFT"
        subtext="Download our mobile app to 
        get a NFT on completion of quest"
        imgSrc={"/images/medal.png"}
        dimensions={[35, 40]}
      />
    </div>
  );
}

export default TrackHeroInfoVertical;
