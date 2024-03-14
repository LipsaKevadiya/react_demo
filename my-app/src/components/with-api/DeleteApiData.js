import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

function DeleteApiData() {
  const [data, setData] = useState([]);
  const [id, setUser] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((result) => {
      result.json().then((resp) => {
        setData(resp);
        setUser(resp[0].id);
        setTitle(resp[0].title);
        setBody(resp[0].body);
      });
    });
  }, []);

  function deleteUser(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.warn("resp", resp);
      });
    });
  }

  // pre-filled form--------------------------
  function selectUser(id) {
    console.warn(data[id - 1]);
    let item = data[id - 1];
    setUser(item.id);
    setTitle(item.title);
    setBody(item.body);
  }

  function updateUser() {
    let item = { id, title, body };
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then((resp) => {
        console.warn("resp", resp);
      });
    });
  }

  return (
    <div>
      <h1>delete data from api </h1>
      <Table striped bordered hover variant="dark">
        <tbody>
          <tr style={{ backgroundColor: "black" }}>
            <td>id</td>
            <td>title</td>
            <td>body</td>
            <td>Operation</td>
          </tr>
          {data.map((item) => (
            <tr style={{ backgroundColor: "darkGrey" }}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
              <td>
                <button onClick={() => deleteUser(item.id)}>Delete</button>
              </td>
              <td>
                <button onClick={() => selectUser(item.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <input
          type="text"
          value={id}
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button onClick={updateUser}>Update user</button>
      </div>
    </div>
  );
}

export default DeleteApiData;
