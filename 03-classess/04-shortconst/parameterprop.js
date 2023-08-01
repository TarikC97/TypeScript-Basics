"use strict";
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
var newObj2 = new Customer2("Tarik", "Curic");
console.log(newObj2.ime, newObj2.prezime);
