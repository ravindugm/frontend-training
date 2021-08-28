import { Shape } from "./Shape";
import { Circle } from "./Cricle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10, 15);
console.log(myShape.getInfo());

let myCircle = new Circle(5, 10, 20);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(20, 30, 40, 50);
console.log(myRectangle.getInfo());