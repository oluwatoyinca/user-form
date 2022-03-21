import React, {useState} from 'react'
import './App.css';
import NewUser from './components/newuser/NewUser';
import UserList from './components/userlist/UserList';
import ErrorModal from './components/errormodal/ErrorModal';

const App = () => {
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')

  const addNewUser = (user) => {
    setUsers((prevState) => {return [user, ...prevState]})
  }

  const errorFound = (error) => {
    setError(error)
  }

  const modalClose = () => {
    setError('')
  }

  let errorContent = ''
  if(error) {
    errorContent = <ErrorModal error={error} onModalClose={modalClose} />
  }

  return (
    <div className="App">
      {errorContent}
      <NewUser onAddNewUser={addNewUser} onErrorFound={errorFound}/>
      <UserList users={users} />
    </div>
  );
}

export default App;
