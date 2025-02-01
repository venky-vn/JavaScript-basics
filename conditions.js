// if else condition
let isAdult;
let age = 11;
if(age > 18){
    isAdult='Adult';
}
else if(age >= 11){
    isAdult='Teenager'
}
else{
    isAdult='child';
}
console.log(isAdult);

//another method
let person=(age > 18)? 'Adult':(age >= 11)?'Teenager':'Child';
console.log(person);