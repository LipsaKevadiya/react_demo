import Welcome from "./Welcome.js";

function UseProps() {
  return (
    <div style={{backgroundColor: "pink"}}>
      <Welcome name="lipsa" age="21" />
      <Welcome name="nency" age="22" />
      <Welcome name="honey" age="20" />
    </div>
  );
}

export default UseProps;
