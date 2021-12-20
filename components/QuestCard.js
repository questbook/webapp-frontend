import Link from "next/link";

function QuestCard({ quest }) {
  return (
    <div>
      <Link href={`/quest/${quest?.slug}`}>
        <a className="cursor-pointer">
          <h3 className="font-Inter font-semibold leading-6 text-lg">
            {quest?.questName}
          </h3>
          <p className=" font-Inter font-normal leading-7 text-sm opacity-60 text-black">
            {quest?.desc}
          </p>
        </a>
      </Link>
    </div>
  );
}

export default QuestCard;
