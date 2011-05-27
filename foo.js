var circle=require("circle.js");
console.log("The area of a circle of radius is %d",circle.area(4));
console.log("module name:%s",circle.name());
//unexported
console.log(circle.PI);
//加载多次，还是同一个对象
console.log(circle==require('circle'));