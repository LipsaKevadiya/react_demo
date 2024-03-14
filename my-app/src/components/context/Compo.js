import { createContext } from "react";
import CompoA from "./CompoA";
const FirstName = createContext();
const LastName = createContext();
const Compo = () => {
  return (
    <div>
      <FirstName.Provider value={"lipsa"}>
        <LastName.Provider value={"k."}>
          <CompoA />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
};

export default Compo;
export { FirstName, LastName };
