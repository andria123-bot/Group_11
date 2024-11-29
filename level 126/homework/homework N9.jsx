const users = [
  { name: "John", age: 28 },
  { name: "Alice", age: 22 },
  { name: "Bob", age: 34 }
];

function UserTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.name}>
            <td>{user.name}</td>
            <td>{user.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
