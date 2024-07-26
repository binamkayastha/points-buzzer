import { MouseEventHandler, useEffect, useState } from "react";
import { BuzzStatus, PlayerData } from "types";

export default function PlayerBox({
  playerData,
  selected,
  onClick,
}: {
  playerData: PlayerData;
  selected: Boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}) {
  const [color, setColor] = useState("bg-gray-300");

  function getColorBy(buzzStatus: BuzzStatus) {
    if (
      playerData.buzzStatus === "Locked" ||
      playerData.buzzStatus === "NotBuzzed"
    ) {
      return "bg-gray-300";
    } else if (playerData.buzzStatus === "Buzzed") {
      return "bg-blue-300";
    } else if (playerData.buzzStatus === "Wrong") {
      return "bg-red-300";
    } else {
      throw Error(`Buzz Status for player is not supported: ${buzzStatus}`);
    }
  }
  useEffect(() => {
    setColor(getColorBy(playerData.buzzStatus));
  }, [playerData]);

  return (
    <div
      className={`px-4 py-2 m-1 rounded min-w-full
        ${color}
        ${selected ? "border-2 border-black" : ""}
      `}
      onClick={onClick}
    >
      <b>
        {playerData.name}:{" "}
        <span
          className={playerData.points >= 0 ? "text-green-800" : "text-red-500"}
        >
          {playerData.points}
        </span>
      </b>
    </div>
  );
}
