import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useAppContext } from "context/state";
import "github-markdown-css";
import { useEffect } from "react";

function SubquestContent() {
  const { subquestTitles, currentSubQuest, subQuestContent } = useAppContext();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentSubQuest]);
  return (
    <section className="  pb-10 lg:pt-0 markdown">
      <ReactMarkdown
        className="font-Inter font-semibold text-lg"
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      >
        {subquestTitles[currentSubQuest]}
      </ReactMarkdown>
      <ReactMarkdown
        className=" font-Inter font-normal text-sm leading-6 lg:leading-8 lg:text-base text-black"
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      >
        {subQuestContent[currentSubQuest]}
      </ReactMarkdown>
    </section>
  );
}

export default SubquestContent;
