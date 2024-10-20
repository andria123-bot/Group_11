
let andria = { id: 1, name: "Andria" }
let giorgi = { id: 2, name: "Giorgi" }
let kato = { id: 3, name: "Kato" }
let salome = { id: 4, name: "Salome" }


const peopleMap = new Map();

peopleMap.set(andria.id, andria);
peopleMap.set(giorgi.id, giorgi);
peopleMap.set(kato.id, kato);
peopleMap.set(salome.id, salome);

peopleMap.forEach(ppl => {
  peopleMap.set(ppl.id, ppl);
});