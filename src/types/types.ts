export type User = {
  username: string;
  role: string;
};

export type Player = {
  host: boolean;
  roomId: string | null;
  playedCell: string;
  username: string | null;
  socketId: string | null;
  playerId: string;
  turn: boolean;
  win: boolean;
};
