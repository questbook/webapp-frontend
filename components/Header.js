import Image from "next/image";

function Header() {
  return (
    <header className="flex flex-col items-center p-2 h-[80px] sm:flex-row sm:justify-between">
      <div className="flex flex-row items-center ml-4 mb-2 sm:mb-0">
        <Image src={"/qb_menu_logo.svg"} width={30} height={20} />
        <h2 className="pl-1 font-Satoshi font-bold text-2xl">Questbook</h2>
      </div>
      <ul className="flex flex-row items-center justify-between space-x-4 mb-2 sm:mb-0 sm:w-4/12 lg:w-3/12">
        <li className="font-Inter text-base lg:text-xl whitespace-nowrap">
          <a href="#">Hackathon</a>
        </li>
        <li className="font-Inter text-base lg:text-xl whitespace-nowrap">
          <a href="#">Blog</a>
        </li>
        <li className="font-Inter  text-base lg:text-xl whitespace-nowrap">
          <a href="#">Join our Community</a>
        </li>
      </ul>
      <div className="flex flex-row items-center justify-between space-x-4">
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
    </header>
  );
}

export default Header;
