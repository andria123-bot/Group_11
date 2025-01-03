// function calculateSum() {
//   const num1 = parseFloat(prompt("Please enter your first number"));
//   const num2 = parseFloat(prompt("Please enter your second number"));
//   const sum = num1 + num2;
//   alert("Sum: " + sum);
// }
// calculateSum();
// აქედან ჩვენ ავიღებთ htmlდან ინფუთებს და ღილაკს
const form = document.getElementById("myForm");
const btn = document.getElementById("btn");

// აქ არის ფუნქცია შემოტანის
function clickHandler(event) {
  event.preventDefault();

  const emailValue = form.elements["email"].value;
  const passValue = form.elements["password"].value;
  const nameValue = form.elements["name"].value;
  const colorValue = form.elements["color"].value;

  if (emailValue === "" || passValue === "" || colorValue === "" || nameValue === "") {
    alert('გთხოვთ შეავსოთ ყველა ველი');
    return;
  }
  
  console.log('Form submitted successfully');
  console.log('Email: ' + emailValue);
  console.log('Password: ' + passValue);
}

btn.addEventListener('click', clickHandler);
