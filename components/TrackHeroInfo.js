import TrackHeroInfoCard from "./TrackHeroInfoCard";
function TrackHeroInfo({ cname }) {
  return (
    <div
      className={`${cname} container absolute flex flex-row justify-center w-11/12  -bottom-[15%]  h-28 rounded-md bg-gradient-to-b from-[#F4FAFF] to-[#EEF4F9] `}
    >
      <TrackHeroInfoCard
        text="Always free"
        subtext="Learn whenever, and wherever you want"
        imgSrc={"/images/gear.png"}
        dimensions={[34, 36]}
      />
      <TrackHeroInfoCard
        text="100% online"
        subtext="Learn whenever, and wherever you want"
        imgSrc={"/images/laptop.png"}
        dimensions={[40, 38]}
      />
      <TrackHeroInfoCard
        text="Course completion NFT"
        subtext="Learn whenever, and wherever you want"
        imgSrc={"/images/medal.png"}
        dimensions={[35, 40]}
      />
    </div>
  );
}

export default TrackHeroInfo;
