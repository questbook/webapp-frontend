function CommunitySection() {
  return (
    <section
      className={` relative  pt-20 lg:pt-56 xl:pt-80  w-full h-full flex flex-col lg:min-h-[704px] bg-community-gradient text-center`}
    >
      <div className="container mx-auto   text-center ">
        <h2 className="font-Inter tracking-tight font-bold text-3xl lg:text-6xl text-white mb-3  ">
          Join <span className="text-[#05B1FF]"> 15,000+ builders</span>, just
          like you!
        </h2>
        <p className="font-Inter font-normal text-xl  text-white ">
          Don&apos;t believe us? See what they are saying about Questbook.
        </p>
        <div className="pt-16">
          <div className="shoutout-embed" data-wall="questbook-webapp"></div>
          <script
            className="shoutout-script"
            src="https://embed.shoutout.so/embed.js"
            defer
          ></script>
        </div>
      </div>
    </section>
  );
}

export default CommunitySection;
