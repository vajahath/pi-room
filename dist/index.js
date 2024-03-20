"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const johnny_five_1 = __importDefault(require("johnny-five"));
const raspberryBoard = __importStar(require("raspi-io"));
const rxjs_1 = require("rxjs");
const { Board, Led } = johnny_five_1.default;
const board = new Board({
    io: raspberryBoard.RaspiIO(),
});
const boardReady = (0, rxjs_1.fromEventPattern)((handler) => board.on("ready", handler)).pipe((0, rxjs_1.shareReplay)(1), (0, rxjs_1.map)(() => board));
boardReady.subscribe(() => {
    const led = new Led("P1-13");
    console.log("fading");
    led.fadeIn(5000);
    console.log("fading done");
});
//# sourceMappingURL=index.js.map