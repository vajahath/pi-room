import five from "johnny-five";
import * as raspberryBoard from "raspi-io";

import { Observable, fromEventPattern, map, shareReplay } from "rxjs";

const { Board } = five;

export function getRaspberryPiBoard(): five.Board {
  if (getRaspberryPiBoard.prototype._board)
    getRaspberryPiBoard.prototype._board;

  getRaspberryPiBoard.prototype._board = new Board({
    io: raspberryBoard.RaspiIO(),
  });

  return getRaspberryPiBoard.prototype._board;
}

export function boardReady(board: five.Board) {
  if (boardReady.prototype._boardReady)
    return boardReady.prototype._boardReady as Observable<five.Board>;

  boardReady.prototype._boardReady = fromEventPattern((handler) =>
    board.on("ready", handler)
  ).pipe(
    shareReplay(1),
    map(() => board)
  );
  return boardReady.prototype._boardReady as Observable<five.Board>;
}
