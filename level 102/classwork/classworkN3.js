const ageMap =  new Map([
  ['Andria', 25],
  ['Giorgi', 30],
  ['Kato', 22],
  ['Salome', 28]
]);

function checkNameInMap(name) {
  if(ageMap.has(name)){
    console.log(`${name} is in the map and their age is ${ageMap.get(name)}`);
  }else{
    console.log(`${name} is not in the map.`);
  }
}