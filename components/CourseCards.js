import CourseCard from "./CourseCard";

function CourseCards() {
  return (
    <div className="lg:relative lg:-top-56 xl:-top-72 container mx-2 xl:mx-auto ">
      <div className="py-3 lg:pl-8 xl:pl-0 text-center lg:text-left">
        <h3 className="text-black lg:text-white font-Inter text-2xl">
          All Courses
        </h3>
      </div>
      <div className="flex  flex-wrap justify-center lg:justify-around  xl:justify-between items-center gap-x-3 gap-y-6 ">
        <CourseCard
          text={"Build on"}
          subtext={"Ethereum"}
          imgSrc={"/eth.png"}
          dimensions={[51, 85]}
        />
        <CourseCard
          text={"Build on"}
          subtext={"Solana"}
          imgSrc={"/solana.png"}
          dimensions={[84, 85]}
        />
        <CourseCard
          text={"Build on"}
          subtext={"NEAR"}
          imgSrc={"/near.png"}
          dimensions={[98, 82]}
        />
        <CourseCard
          text={"Fundamentals of"}
          subtext={"Blockchain"}
          imgSrc={"/bc.png"}
          dimensions={[99, 90]}
        />
      </div>
    </div>
  );
}

export default CourseCards;
