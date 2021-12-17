import { useState, useEffect } from "react";
import Image from "next/image";
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
        <a href="#">Hackathon</a>
      </li>
      <li className="font-Inter text-xl whitespace-nowrap">
        <a href="#">Blog</a>
      </li>
      <li className="font-Inter text-xl whitespace-nowrap">
        <a href="#">Join our Community</a>
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
        <button className="flex flex-row w-28  items-center py-2 px-2 text-white rounded bg-gradient-to-r from-melrose-g to-medium-purple-g">
          <Image src={"/apple_logo.svg"} width={20} height={20} />
          <Image src={"/app_store_text.svg"} width={80} height={20} />
        </button>
        <button className="flex flex-row w-28  items-center py-2 px-2 text-white rounded bg-gradient-to-r from-melrose-g to-medium-purple-g">
          <Image
            className="w-12"
            src={"/play_store_logo.svg"}
            width={20}
            height={20}
          />
          <Image src={"/play_store_text.svg"} width={80} height={20} />
        </button>
      </div>
    </>
  );
  return (
    <header className={` flex flex-row items-center z-10 p-2  justify-between`}>
      <div className="flex flex-row z-30 items-center ml-4 w-1/2 lg:w-1/3">
        <Image src={"/qb_menu_logo.svg"} width={30} height={20} />
        <h2 className="pl-1 font-Satoshi font-bold text-2xl">Questbook</h2>
      </div>
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

      {windowWidth >= 1024 ? (
        <div className="flex lg:relative h-full flex-col lg:flex-row  lg:inline-flex lg:flex-grow justify-between ">
          {menuItems()}
          {mobileButtons()}
        </div>
      ) : (
        <div
          className={`${
            menuState ? " translate-x-0 " : " translate-x-full"
          } transition-transform duration-150 flex  w-full  h-full  fixed left-0 bottom-0 bg-white z-10 justify-start   pt-16  px-11  flex-col lg:flex-row  lg:inline-flex lg:flex-grow `}
        >
          {menuItems()}
          {mobileButtons()}
        </div>
      )}
    </header>
  );
}

export default Header;
