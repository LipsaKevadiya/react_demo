import React,{ useState } from "react";
function WithForm() {
    const [data, setData] = useState("");
    const [tnc, setTnc] = useState(false);
    const [option, setOption] = useState("");
    function GetFormData(event){
        console.warn(data,tnc,option);
        event.preventDefault()
    }
  return (
    <React.Fragment>
      <form onSubmit={GetFormData}>
        <br />
        <input type="text" placeholder="Enter name" onChange={(event)=>setData(event.target.value)} />
        <br />
        <br />
        <select onChange={(event)=>setOption(event.target.value)}>
          <option>Select Option</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <br/>
        <br/>
        <input type="checkbox" onChange={(event)=>setTnc(event.target.checked)}/><span>Accept conditions</span>
        <br/>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}

export default WithForm;
