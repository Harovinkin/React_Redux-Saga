import { useDispatch, useSelector } from "react-redux";
import UserItems from "./components/userItems";
import { incrementCreator, decrementCreator } from "./store/counterReducer";
import { asyncUsersCreator } from "./store/usersReducer";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const users = useSelector(state => state.users.users);

  return (
    <div style={{textAlign: "center"}}>
      <h1>{counter}</h1>
      <div style={{display: "flex", justifyContent: "center"}}>
        <button onClick={() => dispatch(incrementCreator())}>INCREMENT++</button>
        <button onClick={() => dispatch(decrementCreator())}>DICREMENT--</button>
      </div>
      <hr />
      <button onClick={() => dispatch(asyncUsersCreator())}>GET USERS</button>
      <ul style={{padding: 0}}>
        {users.map(user => (
          <UserItems key={user.id} {...user}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
