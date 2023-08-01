import { Circle } from "./Circle";
import { Shape } from "./Shape";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10,15)
console.log(myShape.getInfo())

let myCircle = new Circle(5,10,200)
console.log(myCircle.getInfo())

let myRect = new Rectangle(0,2,4,6)
console.log(myRect.getInfo())