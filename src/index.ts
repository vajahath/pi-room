import five from "johnny-five";
import * as raspberryBoard from "raspi-io";

import { fromEventPattern, map, shareReplay } from "rxjs";

const { Board, Led } = five;

const board = new Board({
  io: raspberryBoard.RaspiIO(),
});

const boardReady = fromEventPattern((handler) =>
  board.on("ready", handler)
).pipe(
  shareReplay(1),
  map(() => board)
);

boardReady.subscribe(() => {
  const led = new Led("P1-13");
  console.log("fading");

  led.fadeIn(5000);

  console.log("fading done");
});
