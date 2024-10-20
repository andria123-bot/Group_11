const animals = new Map([
  ['Lion', 'Savannah'],
  ['Penguin', 'Antarctica'],
  ['Elephant', 'Savannah']
]);

const savannahAnimals = [];
animals.forEach((habitat, animal) => {
  if (habitat === 'Savannah') savannahAnimals.push(animal);
});

console.log(savannahAnimals);
