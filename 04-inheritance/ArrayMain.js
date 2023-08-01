"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Shape_1 = require("./Shape");
var Rectangle_1 = require("./Rectangle");
var myShape = new Shape_1.Shape(10, 15);
var myCircle = new Circle_1.Circle(5, 10, 200);
var myRect = new Rectangle_1.Rectangle(0, 2, 4, 6);
var array = [];
array.push(myShape);
array.push(myCircle);
array.push(myRect);
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var el = array_1[_i];
    console.log(el.getInfo());
}
