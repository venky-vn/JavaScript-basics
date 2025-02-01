// logical ops AND,OR,NOT and Null coalescing operators 
// || or opeartor symbol
console.log(0 || 1);
// && and operator
console.log(1 && 0);
// ! not operator
console.log( !0 );

let age = 12;
gender='M';
if(age >=21 || (age >= 18 && gender == 'F')){
    console.log("you're eligibile")
}
else{
    console.log("you're not eligibile");
}
//?? symbol of null coalescing operator
let ae;
let currentAge = ae ?? 18;
console.log(currentAge);
