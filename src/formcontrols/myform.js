import { useRef, useState } from "react";

function MyForm() {
  const [inputs, setInputs] = useState({});
  const salaryField = useRef();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(inputs));
    
  }

  const handleSalaryField = () => {
    console.log("Before" + JSON.stringify(inputs));
  setInputs(values => ({...values, [salaryField.current.name]: salaryField.current.value}));
  setTimeout(() => {console.log("After" + JSON.stringify(inputs));}, 1000);
  
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input type="text" name="username" value={inputs.username || ""} onChange={handleChange} /></label>
      <br/>
      <label>Enter your age:
        <input type="number" name="age" value={inputs.age || ""} onChange={handleChange}/></label>
        <br/>
        <label>Enter your salary:
        <input type="number" name="salary" value={inputs.salary || ""} ref={salaryField} onChange={handleSalaryField}/></label>
        <input type="submit" />
    </form>
  )
  }

  export default MyForm;
