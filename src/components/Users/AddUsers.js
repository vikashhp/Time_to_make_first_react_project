import classes from "./Adduser.module.css";
import { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUsers = (props) => {
  const inputUserName = useRef();
  const inputUserAge = useRef();
  const inputUserColleageName=useRef();

  const [error, setError] = useState();

  const AddUserSubmitHandler = (event) => {
    event.preventDefault();
    const EnteredUserNAme=inputUserName.current.value;
    const EnteresUserAge=inputUserAge.current.value;
    const EnteredUserColleageName=inputUserColleageName.current.value;

    if (EnteredUserNAme.trim().length === 0 || EnteresUserAge.trim().length === 0) {
      setError({
        title: "Invalid Name",
        message: "Please Enter a valid Name and Age",
      });
      return;
    }
    if (+EnteresUserAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please Enter a Valid Age",
      });
      return;
    }
    // console.log(enteredUsername, enteredAge);

    props.onAddUser(EnteredUserNAme, EnteresUserAge,EnteredUserColleageName);
    inputUserName.current.value="";
    inputUserAge.current.value="";
    inputUserColleageName.current.value='';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={AddUserSubmitHandler}>
          <label htmlFor="username">UserName</label>
          <input id="username" type="text" ref={inputUserName} />
          <label htmlFor="Age">Age</label>
          <input id="age" type="number" ref={inputUserAge} />
          <label htmlFor="Colleage_Name">Colleage_Name</label>
          <input id="Colleage_Name" type='text' ref={inputUserColleageName}/>
          <Button type="submit">Add Users</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUsers;
