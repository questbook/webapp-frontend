import { useEffect, useState } from "react";
import Image from "next/image";

function MobileSection() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative w-full h-[74vh] pt-20 text-center ">
      <h2 className="font-Inter font-bold text-3xl sm:text-6xl text-[#404EED] mb-3 ">
        Designed for every device
      </h2>
      <p className="font-Inter font-normal text-xl  text-[#656565] ">
        Learn on Questbook anytime and anywhere with our apps on iOS and
        Android.
      </p>
      <div className="absolute w-full z-10 ">
        <div className=" -bottom-36 mx-auto w-[344.5px] h-[698px] relative">
          <Image
            src={`${scrollY >= 1597 ? "/i12pb_exp.png" : "/i12p_exp.png"}`}
            layout="fill"
            objectFit="cover"
            className="transition-src duration-1000"
          />
        </div>
      </div>
      <div className="absolute flex  bottom-4 right-[17%] ">
        <button className="mr-6 flex flex-row justify-around w-[132px] h-[46px]  items-center py-2 px-2 text-white rounded bg-[#3F3E3E]">
          <Image src={"/apple_logo.svg"} width={20} height={20} />
          <Image src={"/app_store_text.svg"} width={"68px"} height={"24px"} />
        </button>
        <button className="flex flex-row justify-around w-[132px] h-[46px]  items-center py-2 px-2 text-white rounded bg-[#3F3E3E]">
          <Image
            className="w-12"
            src={"/play_store_logo.svg"}
            width={20}
            height={20}
          />
          <Image src={"/play_store_text.svg"} width={"68px"} height={"24px"} />
        </button>
      </div>
    </section>
  );
}

export default MobileSection;
