import logo from './logo.svg';
import './App.css';

import {useState} from 'react';

function App() {

  const [name,setname]=useState("")
  const [e_name,f_setname]=useState("")
  const [no_name,m_setname]=useState("")
  const [p_jaipur,j_setname]=useState("")

  return (
   

   <div class="container">
    <h1>sing up form</h1>
    <div class="blog">
    <p>my name is {name}   </p>
    <div>
     <label for="">name</label>
      <input type="text" placeholder="enter your name"  onChange={(e)=>setname(e.target.value)}/>
    </div>
    <div >
    <p>my f_name is {e_name}</p>
      <label for="">f_name</label>
      <input type="text" placeholder="enter your email" onChange={(e)=>e_setname(e.target.value)}/>
    </div>
    <div>
    <p>my m_name is {no_name}</p>
      <label for="">M_name</label>
      <input type="text" placeholder="enter your no." onChange={(e)=>no_setname(e.target.value)}/>
    </div>
    <div>
   <p> my address is {p_jaipur}</p>
      <label for="">address</label>
      <input type="text" placeholder="enter your password" onChange={(e)=>p_setname(e.target.value)}/>
    </div>
   </div>
</div>
  );
}

export default App;
