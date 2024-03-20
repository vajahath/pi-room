"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const io_rx_1 = require("./io-rx");
const rxjs_1 = require("rxjs");
const flows_1 = require("./flows");
const board = new io_rx_1.RaspberryBoard();
board
    .onReady()
    .pipe((0, rxjs_1.switchMap)(() => (0, rxjs_1.forkJoin)({
    // register flows here
    ledP113Blink: (0, flows_1.ledBlink)("P1-13", 300),
    buttonBasedLedBlink: (0, flows_1.buttonBasedLedBlink)("P1-11", "P1-15"),
})))
    .subscribe((registeredFlows) => Object.keys(registeredFlows).forEach((flow) => console.log(`${flow} registered`)));
//# sourceMappingURL=index.js.map