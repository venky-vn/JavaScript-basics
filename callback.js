function operation(ops,a,b){
    return ops(a,b)

}
let add = (a,b) => a+b;
let sub = (a,b) => a-b;

console.log(operation(add,2,7));