import React, { useRef, useState } from "react";
import Button from "components/Button";
import InputField from "components/InputField";

// TODO: Change any to function with (userData: UserData) -> void args
function LoginPage({ handleUserDataChange }: { handleUserDataChange: any }) {
  // I could use a useRef here to be more efficient but decided to use a
  // useState to avoid having to figure out how to pass down the ref to the
  // InputField component
  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState("");

  function handleJoinGame() {
    handleUserDataChange({
      username: name,
      roomId: roomId,
      loginAction: "JoinGame",
    });
  }
  function handleCreateNewGame() {
    console.log("CREATE new");
    handleUserDataChange({
      username: name,
      roomId: roomId,
      loginAction: "CreateGame",
    });
  }
  return (
    <>
      <div className="h-screen flex flex-col space-y-4 justify-center items-center">
        <div className="bg-purple-300 md:w-1/3 max-w-lg px-4 py-8 rounded shadow-lg">
          <InputField
            name="Your Name"
            onChange={(event) => setName(event.target.value)}
          />
          <br />
          <InputField
            name="Room Id"
            onChange={(event) => {
              setRoomId(event.target.value.toLowerCase());
            }}
          ></InputField>
        </div>
        <div className="flex flex-row space-x-8">
          <Button
            name="Create New Game"
            onClick={() => handleCreateNewGame()}
          ></Button>
          <Button name="Join Game" onClick={() => handleJoinGame()}></Button>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
