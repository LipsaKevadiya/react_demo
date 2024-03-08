import React from "react";
import Table from "react-bootstrap/Table";

function NestedArray() {
  const students = [
    {
      username: "lipsa",
      id: 11,
      email: "lipsa@gmail.com",
      address: [
        { houseno: 1, city: "surat", country: "India" },
        { houseno: 2, city: "vadodara", country: "India" },
        { houseno: 3, city: "ahmdbd", country: "India" },
      ],
    },
    {
      username: "nency",
      id: 22,
      email: "nency@gmail.com",
      address: [
        { houseno: 4, city: "suratt", country: "India" },
        { houseno: 5, city: "vadodara", country: "India" },
        { houseno: 6, city: "ahmdbd", country: "India" },
      ],
    },
    {
      username: "honey",
      id: 33,
      email: "honey@gmail.com",
      address: [
        { houseno: 7, city: "surattt", country: "India" },
        { houseno: 8, city: "vadodara", country: "India" },
        { houseno: 9, city: "ahmdbd", country: "India" },
      ],
    },
  ];
  return (
    // for Warning: Each child in a list should have a unique "key" prop, we use index i , x.
    <div>
      <div>
        <Table striped bordered hover variant="dark">
          <tbody>
            <tr>
              <th>Sr.no</th>
              <th>username</th>
              <th>id</th>
              <th>email address</th>
              <th>address</th>
            </tr>
            {students.map((data, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{data.username}</td>
                <td>{data.id}</td>
                <td>{data.email}</td>
                <td>
                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <th>houseno</th>
                        <th>city</th>
                        <th>country</th>
                      </tr>
                      {data.address.map((item, i) => (
                        <tr key={i}>
                          <td>{item.houseno}</td>
                          <td>{item.city}</td>
                          <td>{item.country}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default NestedArray;
