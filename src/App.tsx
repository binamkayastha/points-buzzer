import React, { useEffect, useState } from "react";
import "./App.css";
import LoginPage from "pages/LoginPage";
import Header from "components/Header";
import { useLocalStorage } from "hooks/useLocalStorage";
import { UserData } from "types";
import JoinGamePage from "pages/JoinGamePage";
import CreateGamePage from "pages/CreateGamePage";

function App() {
  const [userData, setUserData] = useLocalStorage("userData", {
    loginAction: "NotLoggedIn",
  });
  const [CurrentPage, setCurrentPage] = useState(<div>400</div>);

  function handleUserDataChange(newUserData: UserData) {
    setUserData(newUserData);
  }

  useEffect(() => {
    console.log("UseEffect triggerd");
    if (userData.loginAction === "NotLoggedIn") {
      setCurrentPage(<LoginPage handleUserDataChange={handleUserDataChange} />);
    } else if (userData.loginAction === "JoinGame") {
      setCurrentPage(<JoinGamePage userData={userData} />);
    } else if (userData.loginAction === "CreateGame") {
      setCurrentPage(<CreateGamePage userData={userData} />);
    } else {
      console.log(
        "ERROR: No loginAction not recognized: \n" +
          `userData: ${userData}\n` +
          `loginAction: ${userData.loginAction}`
      );
    }
  }, [userData]);

  return (
    <div className="App">
      <Header userData={userData} handleUserDataChange={handleUserDataChange} />
      {CurrentPage}
    </div>
  );
}

export default App;
