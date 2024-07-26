import Button from "components/Button";
import Peer from "peerjs";
import { useEffect, useRef, useState } from "react";
import { UserData } from "types";
import { setConstantValue } from "typescript";

export default function JoinGamePage({ userData }: { userData: UserData }) {
  // TODO: Figure out how to keep the same peerId if the browser refreshes
  // const [userPeerId, setUserPeerId] = useLocalStorage("userPeerId", "");
  let peerRef = useRef<Peer>(new Peer());
  let peerIdRef = useRef<string>();

  let peerRoomConnRef = useRef<Peer.DataConnection>();

  useEffect(() => {
    const peer = peerRef.current;
    peer.on("open", function (id) {
      console.log("Peer connection opened");
      console.log("Generated peerid");
      console.log(id);

      peerIdRef.current = id;
      const roomPeerId = userData.roomId;
      console.log("Sending test to ", roomPeerId);
      peerRoomConnRef.current = peer.connect(roomPeerId);
      peerRoomConnRef.current.on("open", function () {
        console.log("New connection opened?");
        if (peerRoomConnRef.current == undefined) {
          throw "peer connection does not exist yet!";
        }
        peerRoomConnRef.current.send({
          name: userData.username,
          peerid: peerIdRef.current,
          action: "CONNECTION",
        });
      });
    });
    //receive
    peer.on("connection", function (newConn) {
      console.log("Connection made");
      console.log(newConn);
      newConn.on("open", function () {
        newConn.on("data", function (data) {
          console.log("Received");
          console.log(data);
          console.log(peer);
        });
      });
    });
  }, []);

  const encouragementList = [
    "awesome",
    "admirable",
    "amazing",
    "beautiful",
    "brilliant",
    "cool",
    "delightful",
    "excellent",
    "exceptional",
    "extraordinary",
    "fabulous",
    "fantastic",
    "first-class",
    "glorious",
    "good",
    "grand",
    "great",
    "impressive",
    "incredible",
    "magnificent",
    "marvellous",
    "out of this world",
    "outstanding",
    "remarkable",
    "spectacular",
    "splendid",
    "stellar",
    "superb",
    "swell",
    "terrific",
    "tip-top",
    "top-notch",
    "tremendous",
    "wonderful",
  ];

  function sendBuzz() {
    setEncouragement(
      encouragementList[Math.floor(Math.random() * encouragementList.length)]
    );

    if (peerRoomConnRef.current == undefined) {
      throw "peer connection does not exist yet!";
    }
    peerRoomConnRef.current.send({
      name: userData.username,
      peerid: peerIdRef.current,
      action: "BUZZ",
    });
  }
  const [encouragment, setEncouragement] = useState("awesome");

  return (
    <div className="flex flex-col items-center">
      <span className="text-xl my-14   font-bold font-sans">
        Hey {userData.username}, you're {encouragment}!
      </span>
      <button
        className="rounded-full max-w-4xl w-72 h-72 text-white text-4xl font-bold bg-blue-400
        active:bg-blue-600 ease-linear transition-all duration-150 shadow
          hover:shadow-2xl focus:outline-none "
        onClick={sendBuzz}
      >
        Buzz Buzz <br />
        Bee
      </button>
    </div>
  );
}
