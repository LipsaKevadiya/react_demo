import { useState } from "react";

function PostApiData() {
  const [userId, setUser] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function SaveUser() {
    console.warn({ userId, title, body });
    let data = { userId, title, body };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((resp) => {
        console.warn("resp", resp);
      });
    });
  }

  return (
    <div>
      <h1>Post Api Example</h1>
      <input
        type="text"
        value={userId}
        onChange={(e) => {
          setUser(e.target.value);
        }}
        name="userId"
      />
      <br /> <br />
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        name="title"
      />
      <br /> <br />
      <input
        type="text"
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
        }}
        name="body"
      />
      <br /> <br />
      <button type="button" onClick={SaveUser}>
        Save New User
      </button>
    </div>
  );
}

export default PostApiData;
