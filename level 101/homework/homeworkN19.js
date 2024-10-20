const students = new Map([
  ['Andria', 85],
  ['Salome', 90],
  ['Giorgi', 75]
]);

const avgScore = Array.from(students.values()).reduce((a, b) => a + b, 0) / students.size;
console.log(avgScore);
