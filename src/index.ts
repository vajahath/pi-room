import five from "johnny-five";
import * as raspberryBoard from "raspi-io";

const { Board, Led } = five;

console.log("raspberryBoard", raspberryBoard);
console.log("five", five);

const board = new Board({
  io: raspberryBoard.RaspiIO()
});

board.on("ready", function () {
  const led = new Led("P1-13");
  led.blink(500);
  console.log("blinking");
});
