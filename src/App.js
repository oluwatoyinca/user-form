import React, {useState} from 'react'
import './App.css';
import NewUser from './components/newuser/NewUser';
import UserList from './components/userlist/UserList';

const App = () => {
  const [users, setUsers] = useState([])

  const addNewUser = (user) => {
    setUsers((prevState) => {return [user, ...prevState]})
  }

  return (
    <div className="App">
      <NewUser onAddNewUser={addNewUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
