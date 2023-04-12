import React, { useState, useEffect } from 'react';

function Fetch() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch('http://api.tpossystems.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.error(error));
    }, []);
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <h2>{user.username}</h2>
          <p>{user.occupation}</p>
        </div>
      ))}
    </div>
  )
}

export default Fetch




