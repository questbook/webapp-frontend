import Image from 'next/image';
import { sendAmplitudeData } from 'lib/amplitude';
function Footer({ cname }) {
  return (
    <footer
      className={`${cname} text-white py-6 px-12 sm:px-4 lg:px-16  w-full h-[252px]  bg-gradient-to-t from-[#262626] to-[#383838] `}
    >
      <div className="container mx-auto flex flex-col sm:flex-row justify-between">
        <div className="basis-1/3 lg:basis-1/4 pt-3 lg:pt-6 px-0 xl:px-16 ">
          <div className="flex flex-row justify-center lg:justify-start  mb-5">
            <Image
              alt="alt"
              src={'/images/qb_logo_white.svg'}
              width={'36.77px'}
              height={'34.45px'}
            />
            <h2 className="pl-1 font-Satoshi font-bold text-xl lg:text-2xl">
              Questbook
            </h2>
          </div>
          <div className=" flex justify-center items-center lg:block ">
            <p className="lg:mb-2 mr-2 font-Inter font-normal text-xs lg:text-sm opacity-50 ">
              Connect with us on
            </p>
            <div className="flex justify-between w-40 ">
              <a
                href="https://www.facebook.com/Questbookapp-100777945629014/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  alt="alt"
                  src={'/images/facebook.svg'}
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="https://www.twitter.com/questbookapp"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  alt="alt"
                  src={'/images/twitter.svg'}
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/questbookapp"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  alt="alt"
                  src={'/images/linkedin.svg'}
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCoz9PgPqhvXwv6J38RmpZeg"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  alt="alt"
                  src={'/images/youtube.svg'}
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="https://www.instagram.com/questbookapp"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  alt="alt"
                  src={'/images/instagram.svg'}
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
        </div>
        <div className=" -order-1 lg:order-none basis-[10%] lg:basis-1/4 pt-3 lg:pt-6 px-8 xl:px-16">
          <div className="flex flex-row justify-center lg:justify-start lg:flex-col gap-5">
            <a
              onClick={() => sendAmplitudeData('discord_button_footer_clicked')}
              href="https://discord.gg/tWg7Mb7KM7"
              target="_blank"
              rel="noreferrer"
              className="font-Inter w-fit font-normal opacity-70 text-sm lg:text-base"
            >
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
              support@questbook.app
            </p>
          </div>
        </div>
        <div className=" hidden basis-1/3 lg:basis-1/4 pt-3 lg:pt-6 px-16 lg:flex flex-col gap-3">
          <p className="font-Inter font-normal opacity-70 text-base">
            Mobile Apps
          </p>
          <div className="flex flex-col gap-4  bottom-4 right-[17%] ">
            <a
              onClick={() => sendAmplitudeData('ios_button_footer_clicked')}
              href="https://apps.apple.com/in/app/questbook-learn-together/id1565531521"
              target="_blank"
              rel="noreferrer"
              className="mr-6 flex flex-row justify-around w-[132px] h-[46px]  items-center py-2 px-2 text-white rounded bg-black"
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
              onClick={() => sendAmplitudeData('android_button_footer_clicked')}
              href="https://play.google.com/store/apps/details?id=app.questbook&hl=en_IN&gl=US"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row justify-around w-[132px] h-[46px]  items-center py-2 px-2 text-white rounded bg-black"
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
