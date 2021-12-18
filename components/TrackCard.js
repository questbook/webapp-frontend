import Link from "next/link";

function TrackCard() {
  return (
    <div>
      <Link href="/">
        <a className="cursor-pointer">
          <h3 className="font-Inter font-semibold text-lg">
            Writing code in Solidity
          </h3>
          <p className=" font-Inter font-normal text-sm opacity-60 text-black">
            Some text that explains what this quest is all about. Some text that
            explains what this quest is all about. Some text that explains what
            this quest is all about. Some text that explains what this quest is
            all about.
          </p>
        </a>
      </Link>
    </div>
  );
}

export default TrackCard;
