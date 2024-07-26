import Button from "components/Button";
import { UserData } from "types";

function Header({
  userData,
  handleUserDataChange,
}: {
  userData: UserData;
  handleUserDataChange: any;
}) {
  function logout() {
    handleUserDataChange({
      username: "",
      roomId: userData.roomId,
      loginAction: "NotLoggedIn",
    });
  }
  const LogoutButton = <Button name="Logout" color="black" onClick={logout} />;

  return (
    <div className="h-16 bg-purple-400 flex justify-center items-center">
      <span className="text-3xl font-sans font-extrabold flex-grow">
        Jeoparty
      </span>
      {userData.loginAction !== "NotLoggedIn" ? LogoutButton : ""}
    </div>
  );
}

export default Header;
