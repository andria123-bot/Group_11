import { useState, useEffect, useMemo } from 'react';

function App() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    const fetchUsers = async () => {
      try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        setUsers(data)
      }catch(err){
        console.log(`Error Catched: ${err}`)
      }
    }

    fetchUsers()
  }, [])

  const filteredUsers = useMemo(() => {
    return users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
  }, [search, users])



  return (
    <>
      <h1>Users List</h1>
      <input type="text" placeholder='Search By Name' value={search} onChange={(e) => setSearch(e.target.value)} />

      {
        filteredUsers.length === 0 ?(
          <h1>No Users Found By That Name</h1>
        ) : (
          <ul>
            {
              filteredUsers.map(user => (
                <li key={user.id}>
                  {user.name}
                </li>
              ))}
          </ul>
        )}
    </>
  );
}

export default App;
