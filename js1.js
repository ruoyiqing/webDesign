/**
 * Created by huangruiqing on 03/06/14.
 */
function test(){
    var i= 0;
}
test.name="test";
test.obj = {x:1,y:"obj"};
test.prototype={pro:"prototype"};

var empty={};
var point = {x:2,y:4};
var point2 = {x:point.x,y:point.y+1};
var book = {
    "main title":"js",
    "sub-title":"guide",
    "for":"us",
    author:{
    firstName:"huang",
    lastname:"ruiqing"
    }
};
//alert(book["main title"]);
//alert(book.author.firstName);
var Num = {
    name:"num",
    value:0
}
var obj = new Object();
var obj2 = new Object({x:1,y:3});
//alert(obj2.x);
var number = new Number("12.0abc");
//alert(number);
var str = new String("abcd");
//alert(str);
var array = new Array([1,2,3,4]);
//alert(array);
var date = new Date();
var reg = new RegExp();
var obj3 = Object.create({x:1,y:2});
var obj4 = Object.create(null);
var obj5 = Object.create(Object.prototype);
//alert(obj5.prototype);

window.onload = function(){
    var inner = document.getElementById("outer").getElementById("inner");
    var test1 = new test();
    var test11 = window.test;
    console.log(typeof test11);
//    console.log("name"in test11);
//    console.log("obj" in test11);
//    console.log(test.obj.toString());
    console.log(test11.toString());

    console.log(test11 instanceof Function);
    console.log(test11 instanceof Object);
    console.log(Function.prototype.isPrototypeOf(test11));
    console.log(test1.__proto__);
    console.log("constructor: "+test11.constructor);
    console.log("prototype: "+test11.prototype);
    console.log("prototype: "+Object.getPrototypeOf(test11));
    console.log("prototype: "+test11.constructor.prototype);
    console.log("class: "+Object.prototype.toString.call(array));


//    console.log(typeof test1);
//    console.log(test1.toString());
//    console.log(test1 instanceof test);
    console.log(Object.prototype.isPrototypeOf(test1));
    console.log("test1 constructor: "+test1.constructor);
    console.log("test1 prototype: "+test1.prototype);
    console.log("test1 prototype: "+Object.getPrototypeOf(test1));
    console.log("test1 prototype: "+test1.constructor.prototype);
    console.log("Array tostring: "+Object.toString());
//    console.log(test1.class);

    console.log(typeof Num);
    console.log(Num.toString());
    console.log(Num instanceof Function);
    console.log(Num instanceof Object);
//    console.log(Function.isPrototypeOf(Num));
    console.log("constructor: "+Num.constructor);
    console.log("prototype: "+array.prototype);
    console.log("class: "+array.class);



}
