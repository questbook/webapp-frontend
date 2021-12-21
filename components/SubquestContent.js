import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useAppContext } from "../context/state";
import "github-markdown-css";
import { useEffect } from "react";

function SubquestContent() {
  const { subquestTitles, currentSubQuest, subQuestContent } = useAppContext();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentSubQuest]);
  return (
    <section className=" px-8 pb-10 lg:pt-0 markdown">
      <h3 className="font-Inter font-semibold text-lg mb-6">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {subquestTitles[currentSubQuest]}
        </ReactMarkdown>
      </h3>
      <p className=" font-Inter font-normal text-sm leading-6 lg:leading-8 lg:text-base text-black">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {subQuestContent[currentSubQuest]}
        </ReactMarkdown>
      </p>
    </section>
  );
}

export default SubquestContent;
