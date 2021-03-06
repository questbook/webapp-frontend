import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

function MobileSection() {
  const mobileSectionRef = useRef();
  const mobileImgRef = useRef();
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [offsetBottom, setOffsetBottom] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    setWindowWidth(window.innerWidth);
    const { offsetTop, offsetHeight } = mobileSectionRef.current;
    setOffsetBottom(offsetTop + offsetHeight - 48);

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className={` relative container mx-auto h-auto lg:min-h-[433px] w-full  pt-20 pb-8 lg:pb-0 text-center `}
      ref={mobileSectionRef}
    >
      <h2 className="font-Inter font-bold text-3xl lg:text-6xl text-[#404EED] mb-3 ">
        Designed for every device
      </h2>
      <p className="font-Inter font-normal text-xl  text-[#656565] ">
        Learn on Questbook anytime and anywhere with our apps on iOS and
        Android.
      </p>
      <div
        className={` w-full z-10 lg:absolute lg:-bottom-[50%]  `}
        ref={mobileImgRef}
      >
        <div className="  mx-auto w-[226px]   h-[458.55px]  relative">
          <Image
            alt="alt"
            src={`${
              scrollY >= offsetBottom && windowWidth >= 1024
                ? '/images/i12pb_exp.png'
                : '/images/i12p_exp.png'
            }`}
            layout="fill"
            objectFit="scale-down"
            className="transition-src duration-1000"
          />
        </div>
      </div>
      <div className="lg:absolute z-10 flex mx-auto w-fit lg:bottom-4 lg:right-[10%] xl:right-[17%] ">
        <a
          href="https://apps.apple.com/in/app/questbook-learn-together/id1565531521"
          target="_blank"
          rel="noreferrer"
          className="mr-6 flex flex-row justify-around w-[132px] h-[46px]  items-center py-2 px-2 text-white rounded bg-[#3F3E3E]"
        >
          <Image
            alt="alt"
            src={'/images/apple_logo.svg'}
            width={20}
            height={20}
          />
          <Image
            alt="alt"
            src={'/images/app_store_text.svg'}
            width={'68px'}
            height={'24px'}
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=app.questbook&hl=en_IN&gl=US"
          target="_blank"
          rel="noreferrer"
          className="flex flex-row justify-around w-[132px] h-[46px]  items-center py-2 px-2 text-white rounded bg-[#3F3E3E]"
        >
          <Image
            alt="alt"
            className="w-12"
            src={'/images/play_store_logo.svg'}
            width={20}
            height={20}
          />
          <Image
            alt="alt"
            src={'/images/play_store_text.svg'}
            width={'68px'}
            height={'24px'}
          />
        </a>
      </div>
    </section>
  );
}

export default MobileSection;
