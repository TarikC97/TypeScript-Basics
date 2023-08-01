"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer2 = void 0;
var Customer2 = /** @class */ (function () {
    function Customer2(_ime, _prezime) {
        this._ime = _ime;
        this._prezime = _prezime;
    }
    Object.defineProperty(Customer2.prototype, "ime", {
        get: function () {
            return this._ime;
        },
        set: function (value) {
            this._ime = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer2.prototype, "prezime", {
        get: function () {
            return this._prezime;
        },
        set: function (value) {
            this._prezime = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer2;
}());
exports.Customer2 = Customer2;
