import { useState } from "react";
import {
  useMutation,
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { CREATE_CHECK } from "/graphql/mutation.ts";
import "./CSS/App.css";
import { Link } from "react-router-dom";

function Signup() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [message, setMessage] = useState("");

  const [createCheck] = useMutation(CREATE_CHECK, {
    onCompleted: () => {
      setMessage("✅ User added successfully!");
      setUserName("");
      setUserPassword("");
    },
    onError: (err) => {
      setMessage(`❌ Error: ${err.message}`);
    },
  });

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePassword(userPassword)) {
      setMessage("❌ Password must be at least 8 characters and number");
      return;
    }

    try {
      await createCheck({
        variables: {
          createCheckInput: {
            userName,
            userPassword,
          },
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-navbar">
        <ul>
          <li>
            <Link className="homee" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="signup" to="/signup">
              Signup
            </Link>
          </li>
          <li>
            <Link className="login" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
      <div className="signupp">
        <h1>SIGNUP</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            required
          />
          <br></br>
          <button type="submit">Sign Up</button>
          {message && <p>{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default Signup;
