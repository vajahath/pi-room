"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonBasedLedBlink = exports.ledBlink = void 0;
const johnny_five_1 = __importDefault(require("johnny-five"));
const io_rx_1 = require("./io-rx");
const { Led } = johnny_five_1.default;
async function ledBlink(pin, ms) {
    const led = new Led(pin);
    led.blink(ms);
    console.log(`blinking: ${pin} (${ms}ms)`);
}
exports.ledBlink = ledBlink;
async function buttonBasedLedBlink(buttonPin, ledPin) {
    const button = new io_rx_1.Button(buttonPin);
    console.log(button);
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
exports.buttonBasedLedBlink = buttonBasedLedBlink;
//# sourceMappingURL=flows.js.map