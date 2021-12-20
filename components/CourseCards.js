import { useState, useEffect } from "react";
import CourseCard from "./CourseCard";

function CourseCards() {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.outerHeight);
  }, []);
  return (
    <div
      className={`${
        windowHeight < 837 ? "static" : "lg:absolute"
      } lg:w-full -bottom-[40%]   pb-8 px-6 lg:px-16  mx-2 xl:mx-auto `}
    >
      <div className="py-3 lg:pl-8 xl:pl-0 text-left">
        <h3 className=" text-white font-Inter text-2xl">All Courses</h3>
      </div>
      <div className="flex  flex-wrap  justify-around  xl:justify-between  gap-x-1  lg:gap-x-3 gap-y-6 ">
        <CourseCard
          text={"Build on"}
          subtext={"Ethereum"}
          imgSrc={"/images/eth.png"}
          dimensions={[51, 85]}
          url={"/track/build-on-ethereum"}
        />
        <CourseCard
          text={"Build on"}
          subtext={"Solana"}
          imgSrc={"/images/solana.png"}
          dimensions={[84, 85]}
          url={"/track/build-on-ethereum"}
        />
        <CourseCard
          text={"Build on"}
          subtext={"NEAR"}
          imgSrc={"/images/near.png"}
          dimensions={[98, 82]}
          url={"/track/build-on-ethereum"}
        />
        <CourseCard
          text={"Fundamentals of"}
          subtext={"Blockchain"}
          imgSrc={"/images/bc.png"}
          dimensions={[99, 90]}
          url={"/track/build-on-ethereum"}
        />
      </div>
    </div>
  );
}

export default CourseCards;
