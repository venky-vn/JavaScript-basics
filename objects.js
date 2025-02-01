//objects in javascripit
let FutureOptions = 'Ev';
let Car ={
    name: 'Virtus',
    Brand: 'Volkswagen',
    EngineOptions: FutureOptions+' Petrol , Diesel',
    Variants: 'Base , Mid , Top',
    Price: 18,
    OnRoadPrice(){
        return this.Price+2;//this keyword
    }
};
console.log(Car.EngineOptions);
console.log(Car.Brand,Car.name);
delete Car.EngineOptions;
Car['Model Year'] = 2024;
console.log(Car);
Car['Price'] = 20;
console.log(Car);
Car.Price = 30;
console.log(Car);
console.log(Car.OnRoadPrice());
//in operators
console.log('Variants' in Car);
let User = {
    name: "Venky",
    Age: 22,
}

for(key in User){
    console.log(key);
    console.log(User[key]);
}