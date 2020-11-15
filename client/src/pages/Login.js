import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations"
import Nav from "../components/Nav"
import Auth from "../utils/auth";


function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' })
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e)
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <section class="login">
       <Nav />
      <div className="loginForm">
        <Link className="signUp" to="/signup">
          ← Go to Signup
      </Link>

        <h2 className="loginTitle">Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="">
            <label htmlFor="email"></label>
            <input
              placeholder="Email Address"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label htmlFor="pwd"></label>
            <input
              placeholder="Password"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          {
            error ? <div>
              <p className="error-text" >The provided credentials are incorrect</p>
            </div> : null
          }
          <div className="">
            <button class="loginSubmitBtn" type="submit">
              Submit
          </button>
          </div>
        </form>
      </div>
    </section>
  );
}


export default Login;
