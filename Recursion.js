//JSON Java script Object Notation
let user= {
    name : "Max Verstappen",
    age : 27,
    Designation : "F1 Racing Driver",
};
console.log(JSON.stringify(user));

let NextUser = '{"name" : "Lewis Hamilton","age" : "27"}';
console.log(JSON.parse(NextUser));

//Date
let CurrDate = new Date();
console.log(CurrDate);
let dateofb = new Date("09-06-2003");
console.log(dateofb)
