import Image from "next/image";

function PartnersSection() {
  return (
    <section
      className={`  overflow-hidden w-full  h-[252px] lg:h-[466px] pt-8  text-center bg-gradient-to-b from-[#737DF0] to-[#505AD5] `}
    >
      <div className="container mx-auto relative h-full">
        <h2 className="font-Inter font-bold text-3xl lg:text-6xl text-white mb-3 ">
          Our partners
        </h2>
        <p className="font-Inter font-normal text-xl  text-white ">
          We are backed by the best. Build alongside the best.
        </p>
        <div className="absolute left-0  top-24 lg:top-20">
          <div className="relative w-[79px] lg:w-[213px] h-[76.9px] lg:h-[218px] -rotate-[8.45deg] drop-shadow-[5px_34px_52px_rgba(0,0,0,0.25)]">
            <Image src="/images/yc.png" layout="fill" />
          </div>
        </div>
        <div className="absolute left-24 bottom-0 lg:left-64 ">
          <div className="relative w-[79.32px] lg:w-[214.08px] h-[77px] lg:h-[218px] rotate-[14.81deg]  drop-shadow-[5px_34px_52px_rgba(0,0,0,0.25)]">
            <Image src="/images/solana_p.png" layout="fill" />
          </div>
        </div>
        <div className="absolute right-24 bottom-0 lg:right-64 ">
          <div className="relative w-[71.76px] lg:w-[213.43px] h-[69px] lg:h-[218px]  rotate-[12.7deg]  drop-shadow-[5px_34px_52px_rgba(0,0,0,0.25)]">
            <Image src="/images/ethereum_p.png" layout="fill" />
          </div>
        </div>
        <div className="absolute right-0  top-24 lg:top-20">
          <div className="relative w-[71.57px] lg:w-[213px] h-[69px] lg:h-[218px]  -rotate-[14.43deg]  drop-shadow-[5px_34px_52px_rgba(0,0,0,0.25)]">
            <Image src="/images/near_p.png" layout="fill" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
