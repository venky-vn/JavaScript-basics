//arrays in js
let CarBrands = new Array()
CarBrands = ['Tata','Mahindra','Suzuki','Volkswagen','Skoda','BMW','Ferrari','Tesla'];//in javascript any array types in single declarlation
console.log("\n",CarBrands[6]);
CarBrands[7] = "Mercedes";
console.log("\n",CarBrands[7]);
CarBrands.push('Lamborghini');
console.log("\n",CarBrands[8]);
//unshift command use to push the array in first of the array list
console.log(CarBrands[0]);
CarBrands.unshift('bentley');
console.log(CarBrands[0]);
//pop command use for remove the last array
CarBrands.pop();
console.log(CarBrands.pop());
//shift command use for remove the first array
CarBrands.shift();
console.log(CarBrands.shift());

for(CarBrands of CarBrands){
    console.log("\t \t",CarBrands);
}

//Matrix
let mat =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
for(let i=0;i<mat.length;i++){
    for(let j=0;j<mat[i].length;j++){
        console.log(mat[i][j]);
    }
}