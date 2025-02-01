//factorial in for loop
let n=5;
let fact=1;
for(let i=1;i<=n;i++){
    fact*=i;
}
console.log(fact);
//factorial in while loop
let j=1;
let f=1;
while(j<=n){
    f*=j;
    j++;
}
console.log(fact);
//continue,break
let r=20;
let k =0;
for(let k=1;k<=n;k++){
if(k == 5){
    continue;
}
r +=1;
}
console.log(r);