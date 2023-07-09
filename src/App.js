import logo from "./logo.svg";
import "./App.css";
import {useState} from 'react';
import AddUsers from "./components/Users/AddUsers";
import Button from "./components/UI/Button";
import UserList from "./components/Users/UserList";


function App() {
   const [userList,setUserList]=useState([])
   
   const addUserHandler=(uName,uAge)=>{
    setUserList((previous_data)=>{
      return [...previous_data,{name:uName,age:uAge,id:Math.random().toString()}]
    })
   }

  return (
    <div className="App">
      <AddUsers onAddUser={addUserHandler}  />
      <UserList users={userList}/>
      
    </div>
  );
}

export default App;
