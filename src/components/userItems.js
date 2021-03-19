import { useDispatch } from "react-redux";
import { removeUsersCreator } from "../store/usersReducer";

const UserItems = ({id, name}) => {
  const dispatch = useDispatch()

  return (<li style={{listStyle: "none", cursor: "pointer"}} onClick={() => dispatch(removeUsersCreator(id))}>{name}</li>)
}

export default UserItems;