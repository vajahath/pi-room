"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ledBlink = void 0;
const johnny_five_1 = __importDefault(require("johnny-five"));
const { Led } = johnny_five_1.default;
async function ledBlink(pin, ms) {
    const led = new Led("P1-13");
    led.blink(200);
    console.log(`blinking: ${pin} (${ms}ms)`);
}
exports.ledBlink = ledBlink;
//# sourceMappingURL=flows.js.map