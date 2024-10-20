class Humman{
  constructor(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
  }
  printInfo(){
    console.log(this.firstname, this.lastname);0
  }
}

class Worker extends Humman{
  constructor(firstname, lastname, position){
    super(firstname, lastname);
    this.position = position;
  }
}

const worker1 = new Worker ("Andria", "Lezhava", "None");

console.log(worker1)