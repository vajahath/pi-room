"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const johnny_five_1 = __importDefault(require("johnny-five"));
const raspi_io_1 = __importDefault(require("raspi-io"));
const { RaspiIO } = raspi_io_1.default;
const { Board, Led } = johnny_five_1.default;
const board = new Board({
    io: new RaspiIO(),
});
board.on("ready", function () {
    const led = new Led("P1-13");
    led.blink(500);
    console.log("blinking");
});
//# sourceMappingURL=index.js.map