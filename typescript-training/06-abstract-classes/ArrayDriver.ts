import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myCircle = new Circle(15, 12, 25);
let myRectangle = new Rectangle(30, 35, 40, 45);

// declare an array of shapes ... initially empty
let theShapes: Shape[] = [];

// add the shapes to an array
theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();
}