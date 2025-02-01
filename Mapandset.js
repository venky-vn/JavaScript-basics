//map and set
let map = new Map();
map.set(1,'Lewis Hamilton');
map.set(2,'Max Verstappen')
.set('Carlos saniz');

for(key of map){
    console.log(key);
}

console.log(map.has(2));//has command your for checking the value use n map

//set
let set = new Set();
set.add('Mclaren');
set.add('Red Bull')
    .add('Haas');
for(key of set){
    console.log(key);

}