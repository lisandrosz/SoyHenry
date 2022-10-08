import React, { useState } from "react";

export function validate(state) {
  const errors = {};

  if (state.username === "") {
    errors["username"] = "Username is required";
  } else if (!/\S+@\S+\.\S+/.test(state.username)) {
    errors["username"] = "Username is invalid";
  }

  if (state.password === "") {
    errors["password"] = "Password is required";
  } else if (!/(?=.*[0-9])/.test(state.password)) {
    errors["password"] = "Password is invalid";
  }

  return errors;
}

export default function Form(props) {
  const [state, setState] = React.useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({});

  const inputHandler = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
    setErrors(validate({ ...state, [event.target.name]: event.target.value }));
  };

  return (
    <div>
      <form>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={state.username}
            onChange={inputHandler}
            className={errors.username && "danger"}
          />
          {errors.username && <p className="danger">{errors.username}</p>}
        </div>
        <br />
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={inputHandler}
            className={errors.password && "danger"}
          />
          {errors.password && <p className="danger">{errors.password}</p>}
        </div>
        <br />
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
