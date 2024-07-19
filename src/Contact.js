import { useState } from 'react';

const Contact = () => {
    const [drop, setdrop] = useState("");
    const [quer, setquery] = useState("");
    const [name, setName] = useState("");
    const [email, setem] = useState("");
    const handleChange = (event) => {
      setdrop(event.target.value)
    }
    return (
    <>
      <div class="conform">
        <h1>Contact us</h1>
        <form>
        <div class="w-25 mb-4" >
          <label>Name: &emsp;&emsp;</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="w-25 mb-4" >
          <label for="exampleInputEmail1" class="form-label">Email address:</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setem(e.target.value)}></input>
        </div>
        <div class="form-outline w-75" >
          <label>Query: &emsp;&emsp;</label>
          <textarea class="form-control" id="textAreaExample2" rows="8" type='text' value={quer} onChange={(e) => setquery(e.target.value)}/>
        </div>
        <br/><br/>
        
        <label>Region: &emsp;&emsp;</label>
        <select class="form-select" aria-label="Default select example">
        <option value={drop} onChange={handleChange} selected>Select &emsp; </option>
        <option value="1">India</option>
        <option value="2">United States</option>
        <option value="3">United Kingdom</option>
        <option value="4">China</option>
        <option value="5">Egypt</option>
        </select>
        <br/><br/>
        <input type="submit" />
        </form>
      </div>
    </>
    );
  }
  export default Contact;
  