import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_CHECK } from "/graphql/mutation.ts";
import "./CSS/App.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [message, setMessage] = useState("");

  const [login] = useMutation(LOGIN_CHECK, {
    onCompleted: (data) => {
      if (data.login) {
        setMessage("✅ Login successful!");
        navigate("/application");
      } else {
        setMessage("❌ Invalid credentials.");
      }
    },
    onError: (error) => {
      console.error("GraphQL Error:", error);
      setMessage("❌ Error: " + error.message);
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();

    login({
      variables: {
        loginCheckInput: {
          userName,
          userPassword,
        },
      },
    });
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
      <div className="loginn">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <label>Username:</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <br></br>
          <label>Password:</label>
          <input
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            required
          />
          <br></br>
          <button type="submit">Login</button>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Login;
