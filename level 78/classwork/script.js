const userInfo = {
  name: 'Andria',
  surname: 'lezhava',
  age: 15,
  city: 'Tbilisi',
  from: 'tbilisi',
}
console.log(userInfo);

let p1 = document.getElementById("name")
let surname = document.getElementById("surname")

name.textContent = "Andria"
surname.textContent = "Lezhava"

function changeText() {
  const paragraph = document.getElementById('myParagraph');
  paragraph.textContent = "hello";
}

function red(){
  document.getElementById('change').style.color = "red"
}

function yellow(){
  document.getElementById('change').style.color = "yellow"
}

function green(){
  document.getElementById('change').style.color = "green"
}
