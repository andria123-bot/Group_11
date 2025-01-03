let dataBase = [];

function emailExists(email) {
  return dataBase.some(user => user.email === email);
}

document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault();


  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  if (emailExists(email)) {
    alert('Account already exists!');
  } else {
    dataBase.push({ name, email, password });
    alert('Account successfully created!');
  }
});
