import five from "johnny-five";
import * as raspberryBoard from "raspi-io";

const { Board, Led } = five;

const board = new Board({
  io: raspberryBoard.RaspiIO()
});

board.on("ready", async function () {
  const led = new Led("P1-13");
  console.log("fading");

  led.fadeIn(5000);
  led.fadeOut(2000);

  console.log("fading done");

});
