import Image from "next/image";

function TweetCard({ name, position, tweet, imgSrc }) {
  return (
    <figure className="shrink-0    lg:basis-1/4 xl:basis-auto  w-[296px] h-[313px]   flex flex-col  bg-[#252729] rounded-xl p-6">
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
      <blockquote className="mt-6 pl-6 overflow-hidden line-clamp-6 text-white text-left font-semibold text-base">
        {tweet}
      </blockquote>
    </figure>
  );
}

export default TweetCard;
