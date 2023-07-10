import { useState } from "react";

function MyFormNew() {
  const [name,setName] = useState("");
const handleSubmit = (e) => {
e.preventDefault();
alert(name);
};

const handleChange = (e) => {
setName(e.target.value);
};
    return (
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Enter your name:
          <input type="text" onChange={(e) => handleChange(e)} value={name}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }

  export default MyFormNew;
