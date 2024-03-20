import five from "johnny-five";
import * as raspberryBoard from "raspi-io";

import { Observable, fromEventPattern, map, shareReplay } from "rxjs";

const { Board, Led } = five;

function getRaspberryPiBoard() {
  const board = new Board({
    io: raspberryBoard.RaspiIO(),
  });
  return board;
}

function boardReady(board: five.Board) {
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

boardReady(getRaspberryPiBoard()).subscribe(() => {
  const led = new Led("P1-13");

  led.blink(200);

  console.log("blinking");
});
