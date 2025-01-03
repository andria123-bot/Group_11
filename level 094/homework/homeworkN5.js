const users = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 22 }
];

const updatedUsers = users.map(user => ({
  ...user,
  isAdult: user.age >= 18
}));
