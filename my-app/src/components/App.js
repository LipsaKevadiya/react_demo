import "../App.css";

import Simplee from "./ClassCompo.js";
import WithState from "./StateWithClassCompo.js";
import UseProps from "./PropsWithFuncCompo.js";
import Welcome from "./Welcome.js";
import UseProp from'./PropsWithClassCompo.js'
import GetValue from './GetTextValue.js'

function App() {
  // function Apple() {
  //   return alert("function called");
  // }
  return (
    <div className="App" style={{ backgroundColor: "lightgrey" }}>
      {/* <h1>Hello world</h1>
      <Simple /> */}
      <Simplee />
      {/* {Apple()} */}

      {/* <button onClick={Apple}>Click me</button> */}
      {/* <Apple /> */}
      <UseProp name="lipsa" email="lipsa@gmail.com"/>
      <UseProp name="aesha" email="aesha@gmail.com"/>

      <UseProps />
      <Welcome name={"meet"} age="21" />
      <WithState />
      <GetValue/>
    </div>
  );
}

export default App;
