import { boardReady, getRaspberryPiBoard } from "./io-rx";
import { forkJoin, switchMap } from "rxjs";
import { ledBlink } from "./flows";

const board = getRaspberryPiBoard();

boardReady(board)
  .pipe(
    switchMap(() =>
      forkJoin({
        ledP113Blink: ledBlink("P1-13", 300),
        ledP115Blink: ledBlink("P1-15", 2000),
      })
    )
  )
  .subscribe((registeredFlows) =>
    Object.keys(registeredFlows).forEach((flow) =>
      console.log(`${flow} registered`)
    )
  );
