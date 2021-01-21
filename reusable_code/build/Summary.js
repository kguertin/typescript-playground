"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var Summary = /** @class */ (function () {
    function Summary(analyzer, OutputTarget) {
        this.analyzer = analyzer;
        this.OutputTarget = OutputTarget;
    }
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.OutputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
