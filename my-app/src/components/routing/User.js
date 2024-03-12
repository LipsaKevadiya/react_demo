// import {withRouter} from 'react-router-dom'
import { useParams } from "react-router-dom";

function User() {
  const { id, name, email } = useParams();

  return (
    <div>
      <h3>User id: {id} </h3>
      <h3>User name: {name} </h3>
      <h3>User email: {email} </h3>
    </div>
  );
}

export default User;
