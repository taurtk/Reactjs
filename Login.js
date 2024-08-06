import React from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook

function Login() {
  const history = useHistory(); // Initialize useHistory

  const handleOnSubmit = () => {
    history.push('/list'); // Redirect to '/list'
  };

  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button
          type="button"
          onClick={handleOnSubmit} // Use onClick without arrow function
          className="btn btn-primary"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
