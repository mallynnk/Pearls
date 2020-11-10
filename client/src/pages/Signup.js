import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";


function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async event => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email, password: formState.password,
        firstName: formState.firstName, lastName: formState.lastName
      }
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <section class="signup">
    <div className="signupForm col-3">
      <Link to="/login">
        ← Go to Login
      </Link>

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="space-between my-2">
          <label htmlFor="firstName"></label>
          <input
            placeholder="First Name"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="space-between my-2">
          <label htmlFor="lastName"></label>
          <input
            placeholder="Last Name"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="space-between my-2">
          <label htmlFor="email"></label>
          <input
            placeholder="Email Address"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="space-between my-2">
          <label htmlFor="pwd"></label>
          <input
            placeholder="Password"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-end">
          <button class="loginSubmitBtn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
    </section>
  );

}

export default Signup;
