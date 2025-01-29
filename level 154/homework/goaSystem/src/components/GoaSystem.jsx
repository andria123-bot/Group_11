import { useEffect, useState } from "react";

function GoaSystem() {
  const [students, setStudents] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [account, setAccount] = useState(null);

  // Sync account to localStorage
  useEffect(() => {
    localStorage.setItem("accounts", JSON.stringify(accounts));
    localStorage.setItem("students", JSON.stringify(students));
  }, [accounts, students]);

  useEffect(() => {
    setStudents(JSON.parse(localStorage.getItem("students")) || []);
    setAccounts(JSON.parse(localStorage.getItem("accounts")) || []);
    setAccount(JSON.parse(localStorage.getItem("account")) || null);
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    const newAccount = {
      email: e.target.email.value,
      pass: e.target.pass.value,
    };

    if (accounts.some((acc) => acc.email === newAccount.email)) {
      alert("Account already exists. Please log in.");
      return;
    }

    setAccounts([...accounts, newAccount]);
    alert("Account created successfully!");
    e.target.reset();
  };

  const handleSignin = (e) => {
    e.preventDefault();
    const enteredAccount = {
      email: e.target.email.value,
      pass: e.target.pass.value,
    };

    const loggedInUser = accounts.find(
      (acc) => acc.email === enteredAccount.email && acc.pass === enteredAccount.pass
    );

    if (!loggedInUser) {
      alert("Invalid credentials. Please try again.");
      return;
    }

    setAccount(loggedInUser);
    localStorage.setItem("account", JSON.stringify(loggedInUser));
    alert("Logged in successfully!");
    e.target.reset();
  };

  const logout = () => {
    setAccount(null);
    localStorage.removeItem("account");
    alert("Logged out successfully!");
  };

  // Students management
  const addStudent = (e) => {
    e.preventDefault();
    const student = {
      name: e.target.studentName.value,
      lastname: e.target.studentLastname.value,
      age: e.target.studentAge.value,
    };
    setStudents([...students, student]);
  };

  const deleteStudent = (index) => {
    const filteredStudents = students.filter((_, i) => i !== index);
    setStudents(filteredStudents);
  };

  const editStudent = (index) => {
    const newName = prompt("Enter new first name:", students[index].name);
    const newLastname = prompt("Enter new last name:", students[index].lastname);
    const newAge = prompt("Enter new age:", students[index].age);
    
    if (newName && newLastname && newAge) {
      const updatedStudents = [...students];
      updatedStudents[index] = { name: newName, lastname: newLastname, age: newAge };
      setStudents(updatedStudents);
    }
  };

  const editAccount = () => {
    const newEmail = prompt("Enter new email:", account.email);
    const newPassword = prompt("Enter new password:", "");
    
    if (newEmail && newPassword) {
      const updatedAccount = { email: newEmail, pass: newPassword };
      setAccount(updatedAccount);
      setAccounts(accounts.map(acc => acc.email === account.email ? updatedAccount : acc));
      localStorage.setItem("account", JSON.stringify(updatedAccount));
    }
  };

  return (
    <main>
      {account === null ? (
        <section>
          <form onSubmit={handleRegister}>
            <h1>Registration</h1>
            <input type="email" name="email" required />
            <input type="password" name="pass" required />
            <button>Submit</button>
          </form>

          <form onSubmit={handleSignin}>
            <h1>Login</h1>
            <input type="email" name="email" required />
            <input type="password" name="pass" required />
            <button>Submit</button>
          </form>
        </section>
      ) : (
        <section>
          <h1>Hello {account.email}</h1>
          <button onClick={logout}>Log out</button>
          <button onClick={editAccount}>Edit Account</button>
          <div>
            <form onSubmit={addStudent}>
              <input type="text" name="studentName" placeholder="student name" required />
              <input type="text" name="studentLastname" placeholder="student lastname" required />
              <input type="number" name="studentAge" placeholder="student age" required />
              <button>Add Student</button>
            </form>
          </div>

          <table>
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.lastname}</td>
                  <td>{student.age}</td>
                  <td>
                    <button onClick={() => editStudent(index)}>Edit</button>
                    <button onClick={() => deleteStudent(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </main>
  );
}

export default GoaSystem;
