import { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setem] = useState("");
    const [myCar, setMyCar] = useState("Volvo");
    const handleChange = (event) => {
      setMyCar(event.target.value)
    }
    return (
      <form>
      <h1>Contact us</h1>
      <label>Name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br></br>
      <br></br>
      <label>Gender:   </label>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Male</option>
        <option value="Volvo">Female</option>
        <option value="Fiat">Other</option>
      </select>
      <br></br>
      <br></br>
      <label>Email address:
        <input
          type="text" 
          value={email}
          onChange={(e) => setem(e.target.value)}
        />
      </label>
      <br></br>
      <br></br>
      <input type="submit" />
    </form>
    );
  }
  
  export default Contact;
 
  