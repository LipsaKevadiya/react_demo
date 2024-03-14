import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
function GetApiData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);

  console.warn("dataaaa", data);
  return (
    <div>
      <h1>get data from api </h1>
      <Table striped bordered hover variant="dark">
        <tbody>
          <tr style={{ backgroundColor: "black" }}>
            <td>userId</td>
            <td>id</td>
            <td>title</td>
            <td>body</td>
          </tr>
          {data.map((item) => (
            <tr style={{ backgroundColor: "darkGrey" }}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default GetApiData;
