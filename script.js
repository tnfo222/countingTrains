let newInventoryCarModels = ['S1', 'T1', 'S2', 'S1', 'S2', 'S1']
let newInventoryCarTypes = ['StockCar', 'Refrigerator', 'StockCar', 'Lorrie', 'Lorrie', 'Lorrie']
let newInventoryYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951]

var i=0;
var typeS1Count=0;
var j=0;

while (i<newInventoryCarModels.length){
  console.log(`${newInventoryCarModels[i]} is of type:   ${newInventoryCarTypes[i]}`);
  i++;
}

while (j<newInventoryCarModels.length){
  if (newInventoryCarModels[j] === 'S1') {
    typeS1Count++;
  }
  j++;
}
console.log(`Number of S1 Cars is: ${typeS1Count}`);

let lorrieCount = 0
for(let i = 0; i < newInventoryCarModels.length; i++){
    if(newInventoryCarTypes[i] === 'Lorrie'){
        lorrieCount++;
    }
}
console.log(`I have found ${lorrieCount} lorries.`);

let totalValue = 0

for(let i = 0; i < newInventoryYearBuilt.length; i++){
    totalValue += (2022 - newInventoryYearBuilt[i])
}

let averageYear = (totalValue / newInventoryYearBuilt.length)
console.log(averageYear)