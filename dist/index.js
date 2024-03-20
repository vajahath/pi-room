"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const io_rx_1 = require("./io-rx");
const rxjs_1 = require("rxjs");
const flows_1 = require("./flows");
const board = (0, io_rx_1.getRaspberryPiBoard)();
(0, io_rx_1.boardReady)(board)
    .pipe((0, rxjs_1.switchMap)(() => (0, rxjs_1.forkJoin)({
    ledP113Blink: (0, flows_1.ledBlink)("P1-13", 300),
    ledP115Blink: (0, flows_1.ledBlink)("P1-15", 2000),
})))
    .subscribe((registeredFlows) => Object.keys(registeredFlows).forEach((flow) => console.log(`${flow} registered`)));
//# sourceMappingURL=index.js.map