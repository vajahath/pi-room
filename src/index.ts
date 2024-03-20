import { RaspberryBoard } from "./io-rx";
import { forkJoin, switchMap } from "rxjs";
import { buttonBasedLedBlink, ledBlink } from "./flows";

const board = new RaspberryBoard();

board
  .onReady()
  .pipe(
    switchMap(() =>
      forkJoin({
        // register flows here
        ledP113Blink: ledBlink("P1-13", 300),
        buttonBasedLedBlink: buttonBasedLedBlink("P1-11", "P1-15"),
      })
    )
  )
  .subscribe((registeredFlows) =>
    Object.keys(registeredFlows).forEach((flow) =>
      console.log(`${flow} registered`)
    )
  );
