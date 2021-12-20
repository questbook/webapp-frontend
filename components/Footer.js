import Image from "next/image";
function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row text-white pt-6 px-12 justify-between w-full h-[36vh]  bg-gradient-to-t from-[#262626] to-[#383838] ">
      <div className="basis-1/3 lg:basis-1/4 pt-3 lg:pt-6 px-0 xl:px-16 ">
        <div className="flex flex-row justify-center lg:justify-start  mb-5">
          <Image
            src={"/images/qb_logo_white.svg"}
            width={"36.77px"}
            height={"34.45px"}
          />
          <h2 className="pl-1 font-Satoshi font-bold text-xl lg:text-2xl">
            Questbook
          </h2>
        </div>
        <div className=" inline-flex lg:block ">
          <p className="mb-2 mr-2 font-Inter font-normal text-xs lg:text-sm opacity-50 ">
            Connect with us on
          </p>
          <div className="flex justify-between w-40 ">
            <a href="#">
              <Image src={"/images/facebook.svg"} width={20} height={20} />
            </a>
            <a href="#">
              <Image src={"/images/twitter.svg"} width={20} height={20} />
            </a>
            <a href="#">
              <Image src={"/images/linkedin.svg"} width={20} height={20} />
            </a>
            <a href="#">
              <Image src={"/images/youtube.svg"} width={20} height={20} />
            </a>
            <a href="#">
              <Image src={"/images/instagram.svg"} width={20} height={20} />
            </a>
          </div>
        </div>
      </div>
      <div className=" -order-1 lg:order-none basis-[10%] lg:basis-1/4 pt-3 lg:pt-6 px-8 xl:px-16">
        <div className="flex flex-row justify-center lg:justify-start lg:flex-col gap-5">
          <a href="https://osdg.iiit.ac.in/web3hacks" target="_blank">
            Hackathon
          </a>
          <a href="https://discord.gg/tWg7Mb7KM7" target="_blank">
            Discord
          </a>
        </div>
      </div>
      <div className="basis-1/3 lg:basis-1/4 pt-3 lg:pt-6 px-0 xl:px-16">
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="font-Inter font-normal opacity-70 text-xs lg:text-base">
            992 San Antonio Road, Palto Alto, CA 94303
          </p>
          <p className=" hidden lg:block font-Inter font-normal opacity-70 text-base">
            Palto Alto, CA 94303
          </p>
          <p className="font-Inter font-normal opacity-70 text-xs lg:text-base">
            founders@questbook.app
          </p>
        </div>
      </div>
      <div className=" hidden basis-1/3 lg:basis-1/4 pt-3 lg:pt-6 px-16 lg:flex flex-col gap-3">
        <p className="font-Inter font-normal opacity-70 text-base">
          Mobile Apps
        </p>
        <div className="flex flex-col gap-4  bottom-4 right-[17%] ">
          <a
            href="https://apps.apple.com/in/app/questbook-learn-together/id1565531521"
            target="_blank"
            className="mr-6 flex flex-row justify-around w-[132px] h-[46px]  items-center py-2 px-2 text-white rounded bg-black"
          >
            <Image src={"/images/apple_logo.svg"} width={20} height={20} />
            <Image
              src={"/images/app_store_text.svg"}
              width={"68px"}
              height={"24px"}
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=app.questbook&hl=en_IN&gl=US"
            target="_blank"
            className="flex flex-row justify-around w-[132px] h-[46px]  items-center py-2 px-2 text-white rounded bg-black"
          >
            <Image
              className="w-12"
              src={"/images/play_store_logo.svg"}
              width={20}
              height={20}
            />
            <Image
              src={"/images/play_store_text.svg"}
              width={"68px"}
              height={"24px"}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
