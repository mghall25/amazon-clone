import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // successfully created a new user
        console.log(auth);
        if (auth) {
          history.push("/"); //redirect to home page
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="data:image/png;base64,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"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>
          By signing in, you agree to the AMAZON FAKE Clone Conditions of Use &
          Sale. Please see our Privacy Notice.
        </p>
        <button
          type="submit"
          onClick={register}
          className="login__registerButton"
        >
          Create Your Amazon Acount
        </button>
      </div>
    </div>
  );
}

export default Login;
