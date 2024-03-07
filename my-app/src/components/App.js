import "../App.css";
import UseEffectWithState from './UseEffectWithState.js'
import Hooks from './Hooks.js'
import Unmount from "./Unmount.js";
import LifeCycle from "./ReactLifecycle.js";
import ShouldComponentUpdateMethod from "./ShouldComponentUpdate.js";
import Conditional from "./Conditional.js";
import Fragment from "./Fragment.js";
import WithForm from "./Form.js";
import Simplee from "./ClassCompo.js";
import WithState from "./StateWithClassCompo.js";
import UseProps from "./PropsWithFuncCompo.js";
import Welcome from "./Welcome.js";
import UseProp from "./PropsWithClassCompo.js";
import GetValue from "./GetTextValue.js";
import Simple from "./FuncCompo.js";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "lightgrey" }}>
   
      <UseEffectWithState/>
      <Hooks/>
      <Unmount />
      <ShouldComponentUpdateMethod />
      <LifeCycle />
      <Conditional />
      <WithForm />
      <Fragment />
      <h1>Hello world</h1>
      <Simple />
      <Simplee />

      <UseProp name="lipsa" email="lipsa@gmail.com" />
      <UseProp name="aesha" email="aesha@gmail.com" />

      <UseProps />
      <Welcome name={"meet"} age="21" />
      <WithState />
      <GetValue />
    </div>
  );
}

export default App;
