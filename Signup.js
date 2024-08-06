import React from 'react'
import { useHistory } from 'react-router-dom';


function Signup() {
  const history = useHistory(); // Initialize useHistory

  const handleOnSubmit = () => {
    history.push('/login'); // Redirect to '/list'
  };

  
  return (
    <div classNameName='container'>
        <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit"
  onClick={handleOnSubmit}
  className="btn btn-primary">SignUp</button>
</form>
      
    </div>
  )
}

export default Signup
