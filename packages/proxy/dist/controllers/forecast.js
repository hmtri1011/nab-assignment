"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocationForecast = exports.getLocations = void 0;
const axios_1 = __importDefault(require("axios"));
const baseUrl = 'https://www.metaweather.com/api';
exports.getLocations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { query } = req.query;
    try {
        const result = yield axios_1.default.get(`${baseUrl}/location/search/?query=${query}`);
        const location = (_a = result.data) === null || _a === void 0 ? void 0 : _a[0];
        return res.json({ location });
    }
    catch (err) {
        console.error((_b = err.response) === null || _b === void 0 ? void 0 : _b.data);
        return res.json({ message: 'Something went wrong!' });
    }
});
exports.getLocationForecast = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const { woeid } = req.params;
    try {
        const result = yield axios_1.default.get(`${baseUrl}/location/${woeid}`);
        const forecast = result.data;
        return res.json({ forecast });
    }
    catch (err) {
        console.error((_c = err.response) === null || _c === void 0 ? void 0 : _c.data);
        return res.json({ message: 'Something went wrong!' });
    }
});
//# sourceMappingURL=forecast.js.map