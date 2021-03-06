import Link from 'next/link';
import CourseCard from '../Common/CourseCard';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { sendAmplitudeData } from 'lib/amplitude';

function CourseCards() {
  return (
    <div
      className={` container lg:w-full left-0 right-0 mx-auto lg:absolute -bottom-[40%] lg:-bottom-[30%] xl:-bottom-[40%]   pb-8 px-6 lg:px-16 xl:px-8 xl:-left-1/2 xl:-right-1/2 z-10  xl:mx-auto `}
    >
      <div className="py-3  ">
        <Link passHref href="/tracks">
          <h3
            onClick={() =>
              sendAmplitudeData('explore_all_tracks_button_hero_clicked')
            }
            className=" cursor-pointer w-fit mx-auto lg:ml-0  group hover:underline text-center text-white font-Inter text-2xl"
          >
            Explore all Tracks
            <ArrowRightIcon className="inline ml-2 my-auto group-hover:scale-150 group-hover:scale-y-[2] transition-transform duration-300 ease-linear origin-left text-white w-5 h-5" />
          </h3>
        </Link>
      </div>
      <div className="flex  flex-wrap justify-center  sm:justify-between  gap-x-1 gap-y-6 ">
        <CourseCard
          text={'Build on'}
          subtext={'Ethereum'}
          imgSrc={'/images/eth.png'}
          dimensions={[51, 85]}
          url={'/tracks/build-on-ethereum'}
        />
        <CourseCard
          text={'Build on'}
          subtext={'Solana'}
          imgSrc={'/images/solana.png'}
          dimensions={[84, 85]}
          url={'/tracks/build-on-solana'}
        />
        <CourseCard
          text={'Build on'}
          subtext={'NEAR'}
          imgSrc={'/images/near.png'}
          dimensions={[98, 82]}
          url={'/tracks/build-on-near'}
        />
        <CourseCard
          text={'Build on'}
          subtext={'Polygon'}
          imgSrc={'/images/poly.png'}
          dimensions={[99, 90]}
          url={'/tracks/build-on-polygon'}
        />
      </div>
    </div>
  );
}

export default CourseCards;
