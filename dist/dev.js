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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var crawl_1 = require("./crawl");
var env_1 = require("./env");
// Fungsi untuk menghasilkan tanggal dalam format YYYY-MM-DD
function getFormattedDate(date) {
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var day = String(date.getDate()).padStart(2, '0');
    return "".concat(year, "-").concat(month, "-").concat(day);
}
// Tanggal awal dan akhir dalam format YYYY-MM-DD
var startDate = new Date("2023-12-20");
var endDate = new Date("2023-12-22");
var keyword = "covid";
// Fungsi untuk melakukan crawling pada tanggal tertentu
function crawlForDate(startDate, endDate) {
    return __awaiter(this, void 0, void 0, function () {
        var formattedStartDate, formattedEndDate, config, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    formattedStartDate = getFormattedDate(startDate);
                    formattedEndDate = getFormattedDate(endDate);
                    config = {
                        ACCESS_TOKEN: env_1.ACCESS_TOKEN,
                        SEARCH_KEYWORDS: "".concat(keyword, " lang:id until:").concat(formattedEndDate, " since:").concat(formattedStartDate),
                        TARGET_TWEET_COUNT: 1500,
                        OUTPUT_FILENAME: "".concat(keyword, "_").concat(formattedStartDate, ".csv"),
                        DELAY_EACH_TWEET_SECONDS: 0.1,
                        DELAY_EVERY_100_TWEETS_SECONDS: 5,
                        SEARCH_TAB: "TOP",
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, crawl_1.crawl)(config)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error crawling for date ".concat(formattedStartDate, ": ").concat(error_1));
                    console.log(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Fungsi untuk menjalankan crawling pada rentang tanggal tertentu
function crawlRange(startDate, endDate) {
    return __awaiter(this, void 0, void 0, function () {
        var nextDate;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(startDate <= endDate)) return [3 /*break*/, 2];
                    nextDate = new Date(startDate);
                    nextDate.setDate(nextDate.getDate() + 1);
                    return [4 /*yield*/, crawlForDate(startDate, nextDate)];
                case 1:
                    _a.sent();
                    startDate.setDate(startDate.getDate() + 1);
                    return [3 /*break*/, 0];
                case 2: return [2 /*return*/];
            }
        });
    });
}
// Mulai menjalankan crawling
crawlRange(startDate, endDate);
