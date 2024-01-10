import LeftArrow from "@/assets/icons/left_arrow.svg";
import RightArrow from "@/assets/icons/right_arrow.svg";
import Link from "next/link";

import Image from "next/image";

export default function BottomNavButton({
  topText,
  bottomText,
  arrowLeft,
  dest,
}) {
  arrowLeft = arrowLeft ? true : false;
  return (
    <Link
      className="flex-row flex space-x-2 align-middle hover:cursor-pointer"
      href={dest}
    >
      {/* TODO: Replace with an icon of an arrow */}
      {arrowLeft ? (
        <Image src={LeftArrow} alt="Left arrow" className="self-center pr-2" height={"100%"} />
      ) : (
        <Image src={RightArrow} alt="Right arrow" className="self-center order-last pl-2" height={"100%"} />
      )}

      <div>
        <p className="secondary-title">{topText}</p>
        <p className="text-text-color/50">{bottomText}</p>
      </div>
    </Link>
  );
}
