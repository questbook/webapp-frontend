import Image from "next/image";

function CourseCard({ text, subtext, imgSrc, dimensions }) {
  return (
    <div className="flex flex-col items-center justify-center w-40 lg:w-40w-48 xl:w-72 h-72  xl:h-96 rounded-xl bg-gradient-to-t from-[#FEFEFE] to-[#F1F2FF]  shadow-[0_13px_22px_rgba(73,83,179,0.19)]">
      {/* <div className="flex flex-col items-center justify-center w-40 lg:w-40w-48 xl:w-72 h-[40vh]  rounded-xl bg-gradient-to-t from-[#FEFEFE] to-[#F1F2FF]  shadow-[0_13px_22px_rgba(73,83,179,0.19)]"> */}
      <div className="basis-2/4 flex flex-col justify-end pb-8 ">
        <Image
          src={imgSrc}
          width={dimensions[0]}
          height={dimensions[1]}
          className="drop-shadow-xl"
        />
      </div>
      <div className="basis-1/4 flex flex-col items-center justify-center">
        <p className="text-center text-black text-base font-Inter font-normal">
          {text}
        </p>
        <h4 className="text-center text-black text-2xl xl:text-3xl font-Inter font-medium">
          {subtext}
        </h4>
      </div>
      <div className="basis-1/4 flex  items-center content-center">
        <button className="bg-[#7A64F6] rounded  w-28 h-9 text-white font-Inter font-medium shadow-[0_1px_9px_rgba(71, 114, 138, 0.13)]">
          Learn
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
