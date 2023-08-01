import { Circle } from "./Circle";
import { Shape } from "./Shape";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10,15)
let myCircle = new Circle(5,10,200)
let myRect = new Rectangle(0,2,4,6)

let array: Shape[] = [];
array.push(myShape)
array.push(myCircle)
array.push(myRect)

for(let el of array){
    console.log(el.getInfo())
}