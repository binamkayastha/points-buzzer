import Peer from "peerjs";
import React, { useEffect, useRef, useState } from "react";
import { useLocalStorage } from "hooks/useLocalStorage";
import { PlayerData, UserData } from "types";
import PlayerBox from "components/PlayerBox";
import Button from "components/Button";

export default function CreateGamePage({ userData }: { userData: UserData }) {
  /*
  Players [
    name: lskdjf
    peerid: sdlkjf
    last-buzzed: lskdfj
    buzz-status: "locked", "notbuzzed", "buzzed"
    time-last-buzzed: oiweulkjasdf
  ]
  selected: playername
   */
  const playersTrackerRef = useRef<Record<string, PlayerData>>({});
  const [players, setPlayers] = useState<Record<string, PlayerData>>({});
  const [localPlayers, setLocalPlayers] = useLocalStorage("localPlayers", {});

  const [selectedPlayer, setSelectedPlayer] = useState<string>();
  const firstBuzzTaken = useRef<boolean>(false);

  type LockStateMessage = "Unlock Buzzers" | "Lock Buzzers";
  type LockState = "Unlocked" | "Locked";
  const lockStateRef = useRef<LockState>("Unlocked");
  const [lockStateMessage, setLockStateMessage] =
    useState<LockStateMessage>("Lock Buzzers");

  //receive
  useEffect(() => {
    // Restore player data from local storge on page refresh
    if (localPlayers) {
      playersTrackerRef.current = { ...localPlayers };
      setPlayers({ ...playersTrackerRef.current });
    }

    // const peer = peerRef.current;
    const peer = new Peer(userData.roomId);
    peer.on("open", function (id) {
      console.log("Peer connection opened");
    });
    peer.on("connection", function (newConn) {
      console.log("Connection made");
      console.log(newConn);
      newConn.on("open", function () {
        newConn.on("data", function (data) {
          //TODO: Add type for data
          // HACK use a useRef to keep track of data
          // duplicated, but I don't want to re-create
          // the peer connection listener (which)
          console.log("GETTING CONNECTION FROM", data.peerid);
          if (data.action === "BUZZ" && lockStateRef.current === "Unlocked") {
            playersTrackerRef.current[data.name] = {
              name: data.name,
              peerId: data.peerId,
              buzzStatus: "Buzzed",
              points: playersTrackerRef.current[data.name]?.points
                ? playersTrackerRef.current[data.name].points
                : 0,
              timeLastBuzzed: playersTrackerRef.current[data.name]
                .timeLastBuzzed
                ? playersTrackerRef.current[data.name].timeLastBuzzed
                : Date.now(),
            };
            console.log("FIRST BUZZ STATUS");
            if (!firstBuzzTaken.current) {
              setSelectedPlayer(data.name);
              firstBuzzTaken.current = true;
            }
            setPlayers({ ...playersTrackerRef.current });
            setLocalPlayers({ ...playersTrackerRef.current });
          } else if (data.action === "CONNECTION") {
            playersTrackerRef.current[data.name] = {
              name: data.name,
              peerId: data.peerId,
              buzzStatus: "NotBuzzed",
              points: playersTrackerRef.current[data.name]?.points
                ? playersTrackerRef.current[data.name].points
                : 0,
              timeLastBuzzed: undefined,
            };
            setPlayers({ ...playersTrackerRef.current });
            setLocalPlayers({ ...playersTrackerRef.current });
          } else {
            console.log(
              "Incoming request has no recognized action field",
              data
            );
          }
        });
      });
    });
  }, []);

  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Component unmounted");
    };
  }, []);
  function updatePoints(pointsChange: number) {
    /*
    Get value from the event
    Get the current selected person name
    Get the person object and the ref
    Update the points for that person ref
    Connect to the person peer object, and send them their updated score
    */
    console.log("UPDATE POINTS");
    if (!selectedPlayer) {
      return;
    }

    let playerToUpdate = playersTrackerRef.current[selectedPlayer];
    const currentPlayerPoints = playerToUpdate.points || 0;

    playersTrackerRef.current[selectedPlayer] = {
      ...playerToUpdate,
      points: currentPlayerPoints + pointsChange,
    };
    setPlayers({ ...playersTrackerRef.current });
    setLocalPlayers({ ...playersTrackerRef.current });
  }

  useEffect(() => {
    // when buzzers become unlocked, the new state is lock
    if (lockStateMessage === "Lock Buzzers") {
      // when buzzers become locked, the new state is unlock
    } else if (lockStateMessage === "Unlock Buzzers") {
      resetBuzzers();
    } else {
      console.log("Unrecognized lockStateMessage: ", lockStateMessage);
    }
  }, [lockStateMessage]);

  function resetBuzzers() {
    /*Reset buzzer */
    console.log("Reset buzzers");
    for (const key in playersTrackerRef.current) {
      playersTrackerRef.current[key] = {
        ...playersTrackerRef.current[key],
        buzzStatus: "Locked",
        timeLastBuzzed: undefined,
      };
    }
    firstBuzzTaken.current = false;
    setSelectedPlayer("");
    setLockStateMessage("Unlock Buzzers");
    setPlayers({ ...playersTrackerRef.current });
    setLocalPlayers({ ...playersTrackerRef.current });
  }

  return (
    <div className="flex flex-col items-center min-w-full">
      <span className="text-xl my-4 font-bold font-sans">
        ROOM ID: {userData.roomId}
        <br />
      </span>
      <div className="flex flex-row px-4 min-w-full">
        <div className="md:flex-grow"></div>
        <div className="flex-grow flex flex-col max-w-lg px-4">
          <span className="font-bold underline">Contestants</span>
          {Object.values(players)
            .sort((p1, p2) => {
              if (
                p1.buzzStatus === "Buzzed" &&
                p2.buzzStatus === "Buzzed" &&
                p1.timeLastBuzzed !== undefined &&
                p2.timeLastBuzzed !== undefined
              ) {
                return p1.timeLastBuzzed - p2.timeLastBuzzed;
              } else if (p2.buzzStatus === "Buzzed") {
                return 1;
              } else if (p1.buzzStatus === "Buzzed") {
                return -1;
              } else if (Number(p2.points || 0) < Number(p1.points || 0)) {
                return -1;
              } else if (Number(p2.points || 0) > Number(p1.points || 0)) {
                return 1;
              } else {
                return p2.name.toLowerCase() < p1.name.toLowerCase() ? 1 : -1; // alphabetical
              }
              // TODO: Add Wrong Status sorting
            })
            .map((player) => (
              <PlayerBox
                playerData={player}
                onClick={() => {
                  setSelectedPlayer(player.name);
                }}
                selected={selectedPlayer === player.name}
              />
            ))}
        </div>
        <div className="flex-grow px-4">
          <div className="flex flex-col items-center w-full">
            <span className="font-bold underline">Control Panel</span>

            {lockStateMessage === "Lock Buzzers" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            )}
            <Button
              name={lockStateMessage}
              onClick={() => {
                lockStateRef.current =
                  lockStateMessage === "Lock Buzzers" ? "Locked" : "Unlocked";
                setLockStateMessage(
                  lockStateMessage === "Lock Buzzers"
                    ? "Unlock Buzzers"
                    : "Lock Buzzers"
                );
              }}
            />
            <div className="flex flex-row w-full">
              <div className="flex-grow flex flex-col">
                <span className="font-bold">Wrong</span>
                <Button
                  name="-200"
                  color="red"
                  onClick={() => updatePoints(-200)}
                />
                <Button
                  name="-400"
                  color="red"
                  onClick={() => updatePoints(-400)}
                />
                <Button
                  name="-600"
                  color="red"
                  onClick={() => updatePoints(-600)}
                />
                <Button
                  name="-800"
                  color="red"
                  onClick={() => updatePoints(-800)}
                />
                <Button
                  name="-1000"
                  color="red"
                  onClick={() => updatePoints(-1000)}
                />
              </div>
              <div className="flex-grow flex flex-col">
                <span className="font-bold">Right</span>
                <Button
                  name="200"
                  color="green"
                  onClick={() => updatePoints(200)}
                />
                <Button
                  name="400"
                  color="green"
                  onClick={() => updatePoints(400)}
                />
                <Button
                  name="600"
                  color="green"
                  onClick={() => updatePoints(600)}
                />
                <Button
                  name="800"
                  color="green"
                  onClick={() => updatePoints(800)}
                />
                <Button
                  name="1000"
                  color="green"
                  onClick={() => updatePoints(1000)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex-grow"></div>
      </div>
    </div>
  );
}
