"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Cricle_1 = require("./Cricle");
var Rectangle_1 = require("./Rectangle");
var myShape = new Shape_1.Shape(5, 10);
var myCircle = new Cricle_1.Circle(15, 20, 25);
var myRectangle = new Rectangle_1.Rectangle(30, 35, 40, 50);
// declare an array of shapes ... initially empty
var theShapes = [];
// add the shapes to an array
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var tempShape = theShapes_1[_i];
    console.log(tempShape.getInfo());
}
