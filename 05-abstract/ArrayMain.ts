import { Circle } from "./Circle";
import { Shape } from "./Shape";
import { Rectangle } from "./Rectangle";

let myCircle = new Circle(5,10,20)
let myRect = new Rectangle(0,0,3,7)

let array: Shape[] = [];
array.push(myCircle)
array.push(myRect)

for(let el of array){
    console.log(el.getInfo())
    console.log(el.calculateArea()+"\n")
}