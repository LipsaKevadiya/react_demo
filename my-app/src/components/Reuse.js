import "../App.css";
function Reuse(props) {
  return (
    <div>
      <span>{props.item.username}</span>
      <span>{props.item.id}</span>
      <span>{props.item.email}</span>
    </div>
  );
}
export default Reuse;
