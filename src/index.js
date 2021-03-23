"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Instances_1 = __importDefault(require("./Controller/Instances"));
Instances_1.default.populateInstances({
    autoPopulate: true,
    workers: 1
});
Instances_1.default.initAllInstances();
