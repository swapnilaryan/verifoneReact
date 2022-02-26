import React from "react";
import {signIn} from "../../apiManager";
import { navigate } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      username: "",
      password: "",
      isSignUp: false
    }
    this.onLogin =  this.onLogin.bind(this);
    this.handleChange =  this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  onLogin() {
    const { username, password } = this.state;
    signIn(username, password).then((resp) => {
      // let navigate = useNavigate();
      window.location.href = "/products";
    }, (res) => {
      this.setState({
        error: res.message
      })
    });
  }

  render() {
    const { username, password, error } = this.state;
    return (
      <div className="loginContainer">
        <div className="form">
          <div className="input-container">
            <label className="label">Username: </label>
            <input
              type="text"
              name="username"
              className="input"
              placeholder="Username: verifone"
              value={username}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-container">
            <label className="label">Password: </label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password: verifone"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          {error &&
            <p className="loginError">
              {error}
            </p>
          }
          <button type="submit" id="login-btn" onClick={this.onLogin}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;