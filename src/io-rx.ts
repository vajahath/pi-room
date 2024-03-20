import five from "johnny-five";
import * as raspberryBoard from "raspi-io";

import { filter, fromEventPattern, share, shareReplay } from "rxjs";

abstract class Board extends five.Board {
  private readonly _onReady = fromEventPattern((handler) =>
    this.on("ready", handler)
  ).pipe(shareReplay(1));

  public onReady() {
    return this._onReady;
  }
}

export class RaspberryBoard extends Board {
  constructor(boardOptions?: five.BoardOption) {
    super({
      io: raspberryBoard.RaspiIO(),
      ...(boardOptions || {}),
    });
  }
}

export class Button extends five.Button {
  private readonly _onClick = this.onKeepPressed().pipe(
    filter((ms) => ms >= 5 && ms <= 200)
  );

  private readonly _onKeyDown = fromEventPattern((handler) =>
    this.on("down", handler)
  ).pipe(share());

  private readonly _onKeepPressed = fromEventPattern<number>(
    (handler: (holdTime: number) => void) => this.on("hold", handler)
  ).pipe(share());

  public onClick() {
    return this._onClick;
  }

  public onKeyUp() {
    return this._onClick;
  }

  public onKeyDown() {
    return this._onKeyDown;
  }

  public onKeepPressed() {
    return this._onKeepPressed;
  }
}