import TweetCard from "./TweetCard";

const tweets = [
  {
    id: 0,
    name: "Patryk IInicki",
    position: "Managing Director",
    imgSrc:
      "https://tailwindcss.com/_next/static/media/kentcdodds.f2473a4e9577b345f55d0467a0a37ef5.jpg",
    tweet:
      "Some tweet which talks about how good Questbook is. Some tweet which talks about how good Questbook is. Some tweet which talks about how good Questbook is. Some tweet which talks about how good Questbook is. Some tweet which talks about how good Questbook is. Some tweet which talks about how good Questbook is.",
  },
  {
    id: 1,
    name: "Patryk IInicki",
    position: "Managing Director",
    imgSrc:
      "https://tailwindcss.com/_next/static/media/kentcdodds.f2473a4e9577b345f55d0467a0a37ef5.jpg",
    tweet: "Some tweet which talks about how good Questbook is.",
  },
  {
    id: 2,
    name: "Patryk IInicki",
    position: "Managing Director",
    imgSrc:
      "https://tailwindcss.com/_next/static/media/kentcdodds.f2473a4e9577b345f55d0467a0a37ef5.jpg",
    tweet: "Some tweet which talks about how good Questbook is.",
  },
  {
    id: 3,
    name: "Patryk IInicki",
    position: "Managing Director",
    imgSrc:
      "https://tailwindcss.com/_next/static/media/kentcdodds.f2473a4e9577b345f55d0467a0a37ef5.jpg",
    tweet: "Some tweet which talks about how good Questbook is.",
  },
  // {
  //   id: 4,
  //   name: "Patryk IInicki",
  //   position: "Managing Director",
  //   imgSrc:
  //     "https://tailwindcss.com/_next/static/media/kentcdodds.f2473a4e9577b345f55d0467a0a37ef5.jpg",
  //   tweet:
  //     "Some tweet which talks about how good Airmeet is. Some tweet which talks about how good Airmeet is.  Some tweet which talks about how good Airmeet is.  Some tweet which talks about how good Airmeet is. Some tweet which talks about how good Airmeet is.",
  // },
];
function CommunitySection() {
  return (
    <section className="relative pt-96 w-full h-full min-h-screen bg-community-gradient text-center overflow-hidden ">
      <h2 className="font-Inter font-bold text-3xl sm:text-6xl text-white mb-3 ">
        Join <span className="text-[#05B1FF]"> 15,000+ builders</span>, just
        like you!
      </h2>
      <p className="font-Inter font-normal text-xl  text-white ">
        Don't believe us? Seee what they are saying about Questbook.
      </p>
      <div className=" w-full min-w-[104%] grid grid-cols-1 gap-6 lg:gap-12 sm:grid-cols-2 lg:grid-cols-4 absolute bottom-0 -left-[2%]">
        {tweets.map((tweet) => (
          <TweetCard key={tweet.id} {...tweet} />
        ))}
      </div>
    </section>
  );
}

export default CommunitySection;
