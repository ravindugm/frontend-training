"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myCircle = new Circle_1.Circle(15, 12, 25);
var myRectangle = new Rectangle_1.Rectangle(30, 35, 40, 45);
// declare an array of shapes ... initially empty
var theShapes = [];
// add the shapes to an array
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var tempShape = theShapes_1[_i];
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();
}
