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
exports.Button = exports.RaspberryBoard = void 0;
const johnny_five_1 = __importDefault(require("johnny-five"));
const raspberryBoard = __importStar(require("raspi-io"));
const rxjs_1 = require("rxjs");
class Board extends johnny_five_1.default.Board {
    constructor() {
        super(...arguments);
        this._onReady = (0, rxjs_1.fromEventPattern)((handler) => this.on("ready", handler)).pipe((0, rxjs_1.shareReplay)(1));
    }
    onReady() {
        return this._onReady;
    }
}
class RaspberryBoard extends Board {
    constructor(boardOptions) {
        super({
            io: raspberryBoard.RaspiIO(),
            ...(boardOptions || {}),
        });
    }
}
exports.RaspberryBoard = RaspberryBoard;
class Button extends johnny_five_1.default.Button {
    constructor() {
        super(...arguments);
        this._onClick = this.onKeepPressed().pipe((0, rxjs_1.filter)((ms) => ms >= 5 && ms <= 200));
        this._onKeyDown = (0, rxjs_1.fromEventPattern)((handler) => this.on("down", handler)).pipe((0, rxjs_1.share)());
        this._onKeepPressed = (0, rxjs_1.fromEventPattern)((handler) => this.on("hold", handler)).pipe((0, rxjs_1.share)());
    }
    onClick() {
        return this._onClick;
    }
    onKeyUp() {
        return this._onClick;
    }
    onKeyDown() {
        return this._onKeyDown;
    }
    onKeepPressed() {
        return this._onKeepPressed;
    }
}
exports.Button = Button;
//# sourceMappingURL=io-rx.js.map