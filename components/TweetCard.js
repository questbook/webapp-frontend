import Image from "next/image";

function TweetCard({ name, position, tweet, imgSrc }) {
  return (
    <figure className="relative shrink-0 max-w-[88vw] sm:max-w-[60vw] basis-full lg:basis-1/4 w-[80vw] lg:w-[94vw]  lg:w-auto   h-96 flex flex-col bg-[#252729] rounded-xl p-6">
      <figcaption className="flex items-center space-x-4">
        <img
          src={imgSrc}
          alt=""
          className="flex-none w-14 h-14 rounded-full object-cover"
          loading="lazy"
        />
        <div className="flex-auto text-left ">
          <div className="text-base text-white font-bold font-Inter">
            {name}
          </div>
          <div className="mt-0.5 text-[#928FA3] text-base font-bold font-Inter ">
            {position}
          </div>
        </div>
        <img src={"/images/twitter.svg"} className="w-6 h-5" />
      </figcaption>
      <blockquote className="mt-6 pl-6 text-white text-left font-semibold text-base">
        <p>{tweet}</p>
      </blockquote>
    </figure>
  );
}

export default TweetCard;
