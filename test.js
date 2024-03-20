const Raspi = require("raspi-io").RaspiIO;
const five = require("johnny-five");
const board = new five.Board({
  io: new Raspi(),
});

board.on("ready", () => {
  // Create an Led on pin 7 (GPIO4) on P1 and strobe it on/off
  // Optionally set the speed; defaults to 100ms
  console.log("ready");

  new five.Led("P1-13").blink();
  console.log(five.Button("GPIO17"));
});
