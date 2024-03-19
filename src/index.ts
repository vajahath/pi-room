import five from "johnny-five";
import raspberryBoard from "raspi-io";

const { RaspiIO } = raspberryBoard;
const { Board, Led } = five;

const board = new Board({
  io: new RaspiIO(),
});

board.on("ready", function () {
  const led = new Led("P1-13");
  led.blink(500);
  console.log("blinking");
});
