import TrackCard from "./TrackCard";

function Tracks() {
  return (
    <section className="lg:basis-7/12 xl:basis-8/12 px-8 flex flex-col space-y-3">
      <TrackCard />
      <TrackCard />
      <TrackCard />
      <TrackCard />
      <TrackCard />
      <TrackCard />
    </section>
  );
}

export default Tracks;
