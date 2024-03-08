function User(props) {
  const data = "deesh";
  return (
    <div>
      <h1>Lifting state up</h1>
      <button onClick={() => props.alert(data)}>Click Me</button>
    </div>
  );
}
export default User;
