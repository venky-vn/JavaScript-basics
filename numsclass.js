let x;
x = 24.85;
if (x > 0){
    console.log("X is a Positive Value");
}
else if(x < 0){
    console.log("X is a Negative Value");
}
else{
    console.log("Zero");
}

let val=(x > 0)? "Positive":(x < 0)?"Negative":"Zero";
console.log(val);
//leap year
//divisible by 4 also divisible by 100 and also divisible by 400
let year = 1900;
if(year % 4 == 0){
    if(year % 100 == 0){
        if(year % 400 == 0){
            console.log("this is a leap year");
        }
        else{
        console.log("not a leap year");
        }
    }
    else{
    console.log("Leap year");
    }
}
else{
    console.log("not a leap year");
}

let va = 44; 
if(va % 2 == 0){
    console.log("even")
}
else if(va % 1 ==0){
    console.log("odd");
}