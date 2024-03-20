import five from "johnny-five";
import { Button, RaspberryBoard } from "./io-rx";
import { filter, map, of, scan, switchMap } from "rxjs";

const { Led } = five;

export async function ledBlink(board: RaspberryBoard, pin: string, ms: number) {
  const led = new Led({ pin, board });

  led.blink(ms);

  console.log(`blinking: ${pin} (${ms}ms)`);
}

export async function buttonBasedLedBlink(
  board: RaspberryBoard,
  buttonPin: string,
  ledPin: string
) {
  console.log("board", board);
  const button = new five.Button({ pin: buttonPin, board });

  console.log("button", button);
  // button
  //   .onKeepPressed()
  //   .pipe(
  //     filter((ms) => ms >= 2000),
  //     scan((state) => !state, false),
  //     switchMap((on) => {
  //       if (on) return button.onClick().pipe(scan((ms) => ms + 100, 100));
  //       return of(null);
  //     })
  //   )
  //   .subscribe(async (ms) => {
  //     const led = new Led(ledPin);
  //     if (ms) return led.blink(ms);

  //     led.off();
  //   });
}