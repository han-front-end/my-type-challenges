"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const minimist_1 = __importDefault(require("minimist"));
function default_1(argvs, rules, ops = {}) {
    let minimistOps = {
        string: [],
        boolean: [],
        alias: {},
        default: {}
    };
    let helpArr = [];
    ops.usage && helpArr.push("", `usage: ${ops.usage}`, "");
    ops.describe && helpArr.push(ops.describe, "");
    rules.length > 0 && helpArr.push("options:");
    let rulesHelp = [];
    let ruleMaxLength = 11;
    // help 长度为12
    rules.forEach(ruleItem => {
        if (ruleItem.direct) {
            ruleItem.type === "boolean"
                ? minimistOps.boolean.push(ruleItem.direct)
                : minimistOps.string.push(ruleItem.direct);
            minimistOps.default[ruleItem.direct] = typeof ruleItem.default === undefined ? "" : ruleItem.default;
            if (ruleItem.alias) {
                minimistOps.alias[ruleItem.direct] = ruleItem.alias;
                rulesHelp.push([`-${ruleItem.alias},  --${ruleItem.direct}`]);
            }
            else {
                rulesHelp.push([`--${ruleItem.direct}`]);
            }
            let lastIndex = rulesHelp.length - 1;
            if (ruleMaxLength < rulesHelp[lastIndex][0].length) {
                ruleMaxLength = rulesHelp[lastIndex][0].length;
            }
            rulesHelp[lastIndex].push(`${ruleItem.describe || ""}`);
        }
    });
    rulesHelp.push([""]);
    rulesHelp.push(["-h,  --help", "Print this list and exit."]);
    rulesHelp.forEach(item => {
        item[0] = item[0] || "";
        helpArr.push(`   ${item[0]}${Array(ruleMaxLength - item[0].length + 5).join(" ")}${item[1] || ""}`);
    });
    const fullArgvs = (0, minimist_1.default)(argvs, minimistOps);
    if (fullArgvs.h || fullArgvs.help) {
        console.log(helpArr.join("\n"));
        process.exit();
    }
    return fullArgvs;
}
exports.default = default_1;
