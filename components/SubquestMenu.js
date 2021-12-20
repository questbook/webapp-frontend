import { useEffect, useState } from "react";
import { ChevronRightIcon, XIcon, ArrowLeftIcon } from "@heroicons/react/solid";
import { useAppContext } from "../context/state";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
function SubquestMenu() {
  const { subquestTitles, currentSubQuest, setCurrentSubQuest } =
    useAppContext();
  const { showMenu, setShowMenu } = useAppContext();
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.outerWidth);
  }, []);
  return (
    <div className={`${showMenu ? "block" : "hidden"}`}>
      <div className="fixed lg:hidden h-screen w-screen bg-black opacity-40 top-0 right-0 z-10"></div>
      <div className="fixed lg:relative flex flex-col items-center justify-center lg:justify-start top-0 right-0  min-h-screen lg:min-h-[538px] w-screen lg:w-[373px]   z-20 lg:z-auto">
        <div className=" relative w-[90%] h-[90%] py-8 px-6 rounded bg-white z-20 lg:z-auto opacity-100 shadow-lg">
          <button
            onClick={() => setShowMenu(false)}
            className="absolute flex items-center space-x-2 top-3 right-8"
          >
            {windowWidth >= 1024 ? (
              <>
                <ArrowLeftIcon className=" w-4 h-6 inline" />
                <span className="font-Inter font-medium text-xs text-black">
                  Hide
                </span>
              </>
            ) : (
              <>
                <XIcon className=" w-4 h-6 inline" />{" "}
                <span className="text-black opacity-60">Close</span>
              </>
            )}
          </button>
          <ul className="flex flex-col space-y-3">
            {subquestTitles.map((subquestTitle, index) => (
              <li
                onClick={() => {
                  setCurrentSubQuest(index);
                  windowWidth < 1024 ? setShowMenu(false) : null;
                }}
                className="flex flex-row cursor-pointer items-center space-x-2"
                key={index}
              >
                <ChevronRightIcon
                  className={`${
                    index !== currentSubQuest ? "hidden" : ""
                  } w-6 h-12 text-[#06E487]`}
                />
                <p
                  className={`${
                    index !== currentSubQuest
                      ? "font-normal opacity-75"
                      : "font-semibold opacity-100"
                  } font-Inter text-base text-black`}
                >
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {subquestTitle}
                  </ReactMarkdown>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SubquestMenu;
