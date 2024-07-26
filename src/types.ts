export type LoginAction = "NotLoggedIn" | "JoinGame" | "CreateGame";
export type UserData = {
  username: string;
  roomId: string;
  loginAction: LoginAction;
};
export type PlayerAction = "CONNECTION" | "BUZZ"
export type PlayerActionData = {
  name: string,
  peerId: string,
  action: PlayerAction
}
export type BuzzStatus = "Locked" | "NotBuzzed" | "Buzzed" | "Wrong"
export type PlayerData = {
  name: string,
  peerId: string,
  buzzStatus:  BuzzStatus
  points: number,
  timeLastBuzzed: number | undefined, 
}