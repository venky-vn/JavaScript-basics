let va1=13, va2=14;
let c;
function apex(a = 25,b = 30){
c = (a*b/b*a-b/a);
return c;
}
console.log(apex(2,3));

//odd or even using function
let x = 5;//default values
function OddEven(x){
  if(x % 2 == 0){
    return "Even";
  }
  else{
    return "Odd";
  }
}
console.log(OddEven(2));
// single line function using => symbol
let OddorEven = (x) => x % 2 == 0? "Even": "Odd";
console.log(OddorEven(x))
