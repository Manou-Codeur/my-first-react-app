import React from "react";
import Joi from "joi-browser";

import Form from "./common/from";

class Register extends Form {
  state = {
    data: {
      userName: "",
      password: "",
      userEmail: "",
    },
    errors: {},
  };

  schema = {
    userName: Joi.string().required().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    userEmail: Joi.string().email().label("Email"),
  };

  doSubmit = () => {
    console.log("call the server");
  };

  render() {
    return (
      <div className="register">
        <h1 className="heading">Register</h1>

        <form className="registerFrom" onSubmit={this.preventDefault}>
          {this.renderInput("Email", "userEmail", "email")}
          {this.renderInput("Password", "password", "password")}
          {this.renderInput("Username", "userName")}

          <button
            type="submit"
            className="btn btn-primary"
            disabled={this.validate()}
          >
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
