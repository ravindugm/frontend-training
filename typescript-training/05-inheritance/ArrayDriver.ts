import { Shape } from "./Shape";
import { Circle } from "./Cricle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(5, 10);
let myCircle = new Circle(15, 20, 25);
let myRectangle = new Rectangle(30, 35, 40, 50);

// declare an array of shapes ... initially empty
let theShapes: Shape[] = [];

// add the shapes to an array
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
}