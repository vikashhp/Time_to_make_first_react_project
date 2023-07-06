
import classes from './Adduser.module.css';
import Card from '../UI/Card';
const AddUsers = () => {
  const AddUserSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
    <form onSubmit={AddUserSubmitHandler}>
      <label  htmlFor="username">UserName</label>
      <input id="username" type="text" />
      <label htmlFor="Age">Age</label>
      <input id="age" type="number" />
      <button type="submit">Add Users</button>
    </form>
    </Card>
  );
};
export default AddUsers;
