import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useAppContext } from "../context/state";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

function SubquestNav() {
  const { currentSubQuest, setCurrentSubQuest, subquestTitles } =
    useAppContext();
  return (
    <div className="flex flex-row px-3 py-2 border-t mt-auto">
      <div
        onClick={() => setCurrentSubQuest(currentSubQuest - 1)}
        className={`${
          !currentSubQuest || !subquestTitles.length ? "invisible" : ""
        } cursor-pointer flex flex-row basis-1/2 text-left border-r justify-start`}
      >
        <ChevronLeftIcon className=" w-6 lg:w-16 h-12 lg:h-12 opacity-70" />
        <div className="flex flex-col">
          <p className="font-Inter font-normal text-sm lg:text-base text-black lg:opacity-60">
            Prev
          </p>
          <ReactMarkdown
            className="font-Inter font-semibold text-base text-black opacity-80 lg:opacity-100"
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {subquestTitles[currentSubQuest - 1]}
          </ReactMarkdown>
        </div>
      </div>
      <div
        onClick={() => setCurrentSubQuest(currentSubQuest + 1)}
        className={`${
          currentSubQuest === subquestTitles.length - 1 ||
          !subquestTitles.length
            ? "invisible"
            : ""
        } cursor-pointer flex flex-row basis-1/2 text-right justify-end`}
      >
        <div className="flex flex-col">
          <p className="font-Inter font-normal text-sm lg:text-base text-black lg:opacity-60">
            Next
          </p>
          <ReactMarkdown
            className="font-Inter font-semibold text-base text-black opacity-80 lg:opacity-100"
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {subquestTitles[currentSubQuest + 1]}
          </ReactMarkdown>
        </div>
        <ChevronRightIcon className=" w-6 lg:w-16 h-12 lg:h-12 opacity-70" />
      </div>
    </div>
  );
}

export default SubquestNav;
