import React from "react";
import Table from "react-bootstrap/Table";

function HandleArray() {
  const interns = ["lipsa", "nency", "isha", "grinal"];
  const students = [
    { username: "lipsa", id: 1, email: "lipsa@gmail.com" },
    { username: "nency", id: 2, email: "nency@gmail.com" },
    { username: "honey", id: 3, email: "honey@gmail.com" },
  ];
  return (
    // for Warning: Each child in a list should have a unique "key" prop, we use index.
    <div>
      <h1>Handling Array</h1>
      {interns.map((item, index) => (
        <h4 key={index}>Interns are : {item}</h4>
      ))}

      <div>
        <Table striped bordered hover variant="dark">
          <tbody>
            <tr>
              <th>username</th>
              <th>id</th>
              <th>email address</th>
            </tr>
            {students.map((data, i) => (
              <tr key={i}>
                <td>{data.username}</td>
                <td>{data.id}</td>
                <td>{data.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <th>username</th>
              <th>id</th>
              <th>email address</th>
            </tr>
            {students.map((data, i) =>
            //for filtering data from table that has id 2
              data.id === 2 ? (
                <tr key={i}>
                  <td>{data.username}</td>
                  <td>{data.id}</td>
                  <td>{data.email}</td>
                </tr>
              ) : null
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default HandleArray;
