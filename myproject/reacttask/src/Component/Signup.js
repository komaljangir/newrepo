
import { useState } from "react"
import axios from "axios"

function Signup(props) {
  console.log(">>>>>>>props", props)
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [confirmpassword, setconfirmpassword] = useState("")
  const onSubmitForm = async (e) => {
    e.preventDefault();
    console.log(email, password, confirmpassword);
    const info = {
      email: email,
      password: password,
      confirmpassword: confirmpassword,
    };
    const res = await axios({
      method: "post",
      url: "http://localhost:8008/signup",
      data: info,

    })
  };
  return (
    <div className="app">
      <div className="container">
        <div className="row">
          <div className="shortdiv">
            <div className="mini">
              <h2>Sign Up</h2>
            </div>
          </div>
          <div className="loginform ">
            <form onSubmit={onSubmitForm}>
              <input
                className="input"
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br/>
              <br/>
              <br/>
              <input
                className="input"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br/>
              <br/>
              <br/>
              <input
                className="input"
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setconfirmpassword(e.target.value)}
              />
              <button className="bt" type="submit">
                signup
              </button>
              <br/>
              <br/>
              <br/>
            </form>
          </div>
        </div>
      </div></div>
  )
}
export default Signup;


           