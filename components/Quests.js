import { useAppContext } from "../context/state";
import QuestCard from "./QuestCard";

function Quests() {
  const { quests } = useAppContext();
  return (
    <section className="lg:basis-7/12 xl:basis-8/12 px-8 flex flex-col space-y-7">
      {quests?.map((quest, index) => (
        <QuestCard key={index} quest={quest} />
      ))}
    </section>
  );
}

export default Quests;
