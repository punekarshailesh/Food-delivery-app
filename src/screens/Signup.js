import React, { useState } from "react";

import { Link } from "react-router-dom";

export default function Signup() {
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: ""
  }); // default values to overcome this onchange listener

  const handleSubmit = async (e) => {
    e.preventDefault(); // synthetic event example
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      // backend mai data bhejenge
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.location,
      }) 
    });

    const json = await response.json(); // response ko json mai convert krenge
    console.log(json);

    if (!json.success) {
      if (json.errors) {
        // const errorMessages = json.errors.map(err => err.msg).join('\n');
        // alert("Validation failed:\n" + errorMessages);
        alert("Enter valid credentials");
      } else {
        alert("Enter valid credentials");
      }
    }
  };

  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={credentials.name}
              onChange={onChange}
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={credentials.email}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={onChange}
              placeholder="Enter Your Email"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={credentials.password}
              id="exampleInputPassword1"
              onChange={onChange}
              placeholder="Enter Your Password"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              name="location"
              value={credentials.geolocation}
            //   value={credentials.geolocation}
              id="exampleInputAddress"
              onChange={onChange}
              placeholder="Enter Your Address"
            />
          </div>
          <button type="submit" className="m-3 btn btn-success">
            Signup
          </button>
          <Link to="/login" className="btn btn-danger">
            Login
          </Link>
        </form>
      </div>
    </>
  );
}
