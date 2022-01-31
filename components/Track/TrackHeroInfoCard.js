import Image from 'next/image';
function TrackHeroInfoCard({ text, subtext, imgSrc, dimensions }) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-40 lg:w-auto lg:space-x-3">
      <div className="basis-2/4 lg:basis-auto flex flex-col justify-center  ">
        <Image
          alt="alt"
          src={imgSrc}
          width={dimensions[0]}
          height={dimensions[1]}
          className="shadow-[0_8px_13px_rgba(146, 179, 206, 0.54)]"
        />
      </div>
      <div className="basis-1/4  lg:basis-4/6 flex flex-col items-center lg:items-start justify-center">
        <p className="text-center lg:text-left text-black text-[0.6rem] lg:text-lg font-semibold font-Inter">
          {text}
        </p>
        <h4 className="hidden lg:inline-flex text-center lg:text-left text-[#666666] lg:text-xs font-Inter font-medium">
          {subtext}
        </h4>
      </div>
    </div>
  );
}

export default TrackHeroInfoCard;
