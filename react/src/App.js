import logo from './logo.svg';
import './App.css';

import {useState} from 'react';

function App() {

  const [name,setname] = useState("");
  const [email,setemail] = useState("");
  const [number,setnumber] = useState("")
  const [password,setpassword] = useState("");
  const[confirmpassword,setconfirmpassword] = useState("");

  const onSubmitForm =(e) =>{
    e.preventDefault();
    console.log(name,email,number,password,confirmpassword);
    const data={
      name:name,
      email:email,
      number:number,
      password:password,
      confirmpassword:confirmpassword
    };
const stringifyData = JSON.stringify(data);
localStorage.setItem("data",stringifyData);
console.log(">>>>>>>data",data)
console.log(">>>>>>>>data",JSON.stringify(data));
  };
  

  return (


<div>
  <center>
  <h1>sign up </h1>
  <form onSubmit={onSubmitForm}> 
  <input type="text" placeholder=" enter your name" onChange={(e) =>setname(e.target.value)}/>
  <br/>
  <input type="email" placeholder=" enter your email" onChange={(e) =>setemail(e.target.value)}/>
  <br/> 
  <input type="number" placeholder=" enter your number" onChange={(e) =>setnumber(e.target.value)}/>
  <br/>
  <input type="password" placeholder="enter your password" onChange={(e) =>setpassword(e.target.value)}/>
  <br/>
  <input type="password" placeholder="confirm password" onChange={(e) =>setconfirmpassword(e.target.value)}/>
  <br/>
  <br/>
  <button type="submit">submit</button>
  </form>
  </center>

</div>

  );
}

export default App;
