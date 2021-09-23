function areaOfTriangle(side1,side2,side3){
    var sp = (side1 + side2 + side3) * (1/2); // calculating semiperimeter
    var area = Math.sqrt(sp*((sp-side1)*(sp-side2)*(sp-side3)))
    console.log(area);
}
areaOfTriangle(3,6,5);