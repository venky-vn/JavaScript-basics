
//Variable declaration
let bookName;
//variable initialization
bookName = "Harry Potter";
const bookAuthor = "j.k.Rowling", bookPublisher = "Bloomsbury";
console.log(bookName,bookAuthor,"\t",bookPublisher)
// rules to name a variable
// must be unique
// only to special character should be allow ($,_)
// can have digits but should not start with it (1bookname)

let Venky ,name;
Venky = "Venkatesh";
const DOB = "09.06.2003";
const age = (DOB);
console.log(age);
console.log("\n", Venky);

//number data type
let pi = 3.14;
console.log(pi);
console.log(typeof pi, typeof Venky);

//special numeric value
let infi = Infinity;
let neginfi = -Infinity;
let nan = NaN;
console.log(typeof infi, typeof neginfi,typeof nan);
console.log(1 / 0);

//Bigint
//2^53 +1 above using big int
let limit = 9007199254740991n;
console.log(limit + 2n);
console.log(typeof limit);

//String data type
let f1no1 = "Max Verstappen";
console.log(f1no1);
let f1no44 = '"Sir" Lewis Hamilton';
console.log(f1no44);
let rev = `1+3 = ${1+3}`;//only works in ``
console.log(rev);

//misc data types
//boolean data types
let maxisaMale = true;
console.log(typeof maxisaMale);
let condition = 5 < 3;
console.log(condition, "\n", typeof condition);

//null data type
let car = null;
console.log(car);

//undefined value
let DR3;
console.log(DR3);

//modal input
let champ;
//champ = prompt('Enter the max championship winnings');
console.log(champ);

//type conversion
//implicit method
console.log("12" / "2");
//explicit method
let exp = 21;
console.log(typeof exp);
exp = String(exp);
console.log(typeof exp);
let Ager = null;
console.log(typeof Ager);
Ager = Number(Ager);
console.log(typeof Ager);
console.log(Ager);
//boolean method
let bool = 45;
console.log(typeof bool);
bool = Boolean(bool);
console.log(typeof bool);
console.log(bool);
//only if is false in boolean method of number conversion
let negbool = 0;
console.log(typeof negbool);
negbool = Boolean(negbool);
console.log(typeof negbool);
console.log(negbool);

//operators
//unary operators
let x = 1;
x = -x;
console.log(x);
//binary operators
let a = 12, b = 5;
sum = (a + b) / 2;
console.log(sum);
//modulo operators % this symbol use to find remainder only for + operator
let modu = (a % b);
console.log(modu);
//exponent operator ** 
let expo = (a ** b);
console.log(expo);
//string concatenation operator
let wor = 'hi', wore = 'hello';
let reak = (wor + wore);
console.log(reak);
let p = '2', q = '5';
let ae = (+p + +q);
console.log(ae);
//assignment operators
//chaining assignment
let w = e = r = 12;
console.log(w, e, r);
//modify in place
let modt = 12;
modt *= 5;
console.log(modt);

//increment and Decrement
let inds = 68, kes = 70;
inds++;
console.log(inds);
kes--;
console.log(kes);

