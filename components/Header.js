import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

function Header() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [menuState, setMenuState] = useState(false);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const menuItems = () => (
    <ul
      className={`${
        windowWidth >= 1024
          ? " w-1/2 flex-row items-center justify-center space-x-8"
          : "flex-col items-start  space-y-8 mb-8 "
      } flex    `}
    >
      <li className="font-Inter text-xl whitespace-nowrap">
        <a href="https://osdg.iiit.ac.in/web3hacks" target="_blank">
          Hackathon
        </a>
      </li>
      {/* <li className="font-Inter text-xl whitespace-nowrap">
        <a href="#">Blog</a>
      </li> */}
      <li className="font-Inter text-xl whitespace-nowrap">
        <a href="https://discord.gg/tWg7Mb7KM7" target="_blank">
          Discord
        </a>
      </li>
    </ul>
  );
  const mobileButtons = () => (
    <>
      <p className="font-Inter text-sm mb-2 lg:hidden ">
        Download our mobile app
      </p>
      <div
        className={`${
          windowWidth >= 1024 ? "justify-between" : "justify-start"
        } flex flex-row items-center space-x-4 mr-4`}
      >
        <a
          href="https://apps.apple.com/in/app/questbook-learn-together/id1565531521"
          target="_blank"
          className="flex flex-row w-28  items-center py-2 px-2 text-white rounded bg-gradient-to-r from-melrose-g to-medium-purple-g"
        >
          <Image src={"/images/apple_logo.svg"} width={20} height={20} />
          <Image src={"/images/app_store_text.svg"} width={80} height={20} />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=app.questbook&hl=en_IN&gl=US"
          target="_blank"
          className="flex flex-row w-28  items-center py-2 px-2 text-white rounded bg-gradient-to-r from-melrose-g to-medium-purple-g"
        >
          <Image
            className="w-12"
            src={"/images/play_store_logo.svg"}
            width={20}
            height={20}
          />
          <Image src={"/images/play_store_text.svg"} width={80} height={20} />
        </a>
      </div>
    </>
  );
  return (
    <>
      <header className={`sticky top-0 bg-white z-20`}>
        <div className="container mx-auto flex flex-row items-center z-10 p-2  justify-between">
          <Link href="/">
            <div className="flex flex-row cursor-pointer z-30 items-center ml-4 w-1/2 lg:w-1/3">
              <Image src={"/images/qb_menu_logo.svg"} width={30} height={20} />
              <h2 className="pl-1 font-Satoshi font-bold text-2xl">
                Questbook
              </h2>
            </div>
          </Link>
          <div
            className="inline-flex z-30 lg:hidden p-[5px] mr-4 "
            onClick={() => setMenuState(!menuState)}
          >
            {menuState ? (
              <XIcon className="h-5 w-5 text-black" />
            ) : (
              <MenuIcon className="h-5 w-5 text-black" />
            )}
          </div>

          {windowWidth >= 1024 && (
            <div className="flex lg:relative h-full flex-col lg:flex-row  lg:inline-flex lg:flex-grow justify-between ">
              {menuItems()}
              {mobileButtons()}
            </div>
          )}
        </div>
      </header>
      {windowWidth < 1024 && (
        <div
          className={`${
            menuState ? " translate-x-0 " : " translate-x-full"
          } transition-transform duration-150 flex  w-full  h-full  fixed left-0 bottom-0 bg-white z-10 justify-start   pt-16  px-11  flex-col lg:flex-row  lg:inline-flex lg:flex-grow `}
        >
          {menuItems()}
          {mobileButtons()}
        </div>
      )}
    </>
  );
}

export default Header;
