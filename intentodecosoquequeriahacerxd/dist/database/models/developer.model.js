"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const developer_schema_1 = __importDefault(require("../schemas/developer.schema"));
const developer = (0, mongoose_1.model)("developer", developer_schema_1.default);
exports.default = developer;
