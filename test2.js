//NaN: Not a Number

//there is a confusion in js while converting values from one datatype to another
//"33abc" => NaN
//but type of NaN is number!

let isLogged = ""

let boolLogged = Boolean(isLogged)
console.log(boolLogged);

//empty string gives boolean value true
let someNum = 33;
let stringNum = String(someNum);  //33
console.log(stringNum);//33
console.log(typeof stringNum); //string