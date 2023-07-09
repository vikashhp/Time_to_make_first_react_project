import classes from "./Adduser.module.css";
import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUsers = (props) => {
  const [enteredUsername, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error,setError]=useState()

  const AddUserSubmitHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length===0 || enteredAge.trim().length===0){
      setError({
        title:'Invalid Name',
        message:'Please Enter a valid Name and Age'
      })
      return;
    }
    if(+enteredAge < 1){
      setError({
        title:'Invalid Age',
        message:'Please Enter a Valid Age'
      })
      return;
    }
    // console.log(enteredUsername, enteredAge);

    props.onAddUser(enteredUsername,enteredAge);


    setEnteredUserName('');
    setEnteredAge('')
  };
  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler=()=>{
    setError(null)
  }

  return (
<div>
   {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={AddUserSubmitHandler}>
        <label htmlFor="username">UserName</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
          value={enteredUsername}
        />
        <label htmlFor="Age">Age</label>
        <input
          id="age"
          type="number"
          onChange={ageChangeHandler}
          value={enteredAge}
        />
        <Button type="submit">Add Users</Button>
      </form>
    </Card>
    </div>
  );
};
export default AddUsers;
