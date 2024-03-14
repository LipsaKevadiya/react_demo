import { useContext } from "react";
import { FirstName, LastName } from "./Compo";
//import CompoC from "./CompoC";

const CompoB = () => {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  return (
    <h1>
      My Name is {fname}
      {lname}
    </h1>
  );
};
export default CompoB;
