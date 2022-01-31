import { useAppContext } from "context/state";
import CourseCard from "./CourseCard";

function CourseGrid() {
  const { trackList } = useAppContext();
  return (
    <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  col-span-6  gap-y-4 justify-center items-center">
      {trackList.map((track, index) => (
        <CourseCard
          subtext={track.trackName}
          imgSrc={`/images/${track.cardThumbnail}`}
          url={`/tracks/${track.trackNameKey}`}
          key={index}
        />
      ))}
    </div>
  );
}

export default CourseGrid;
