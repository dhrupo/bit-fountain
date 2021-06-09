import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setemail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  // let history = useHistory();
  // let location = useLocation();
  // let { from }:any = location.state || { from: { pathname: "/" } };

  const handleNameChange = (event:any) => {
    setemail(event.target.value);
  }

  const handlePasswordChange = (event:any) => {
    setPassword(event.target.value);
  }

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://163.47.115.230:30000/api/login", {email, password})
      sessionStorage.setItem('token', res.data.access_token);
      // history.replace(from);
      window.location.replace("/");
    }
    catch (err) {
      setError("Please Provide valid email or password.");
    }
  }

  return (
    <div className="container w-lg-50">
      <h4 className="text-center mb-3">Login</h4>
      <p className="text-danger fw-bold">{error}</p>
      <form onSubmit={handleSubmit} className="w-75 mx-auto">
        <input type="email" className="form-control mb-2" name="email" onChange={handleNameChange} placeholder="Enter Email" required/>
        <input className="form-control mb-2" name="password" type="password" onChange={handlePasswordChange} placeholder="Password" required/>
        <button className="btn w-100 btn-primary mx-auto" type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;