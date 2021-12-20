import CourseCard from "./CourseCard";

function CourseCards() {
  return (
    <div
      className={` container lg:w-full lg:absolute -bottom-[40%] lg:-bottom-[30%] xl:-bottom-[40%]   pb-8 px-6 lg:px-16 xl:px-0 xl:-left-1/2 xl:-right-1/2  xl:mx-auto `}
    >
      <div className="py-3  text-left">
        <h3 className=" text-white font-Inter text-2xl">All Courses</h3>
      </div>
      <div className="flex  flex-wrap  justify-between  gap-x-1  lg:gap-x-1 gap-y-6 ">
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
