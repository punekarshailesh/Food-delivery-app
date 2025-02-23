import {React,useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'

export default function Login() {




  const [credentials, setcredentials] = useState({
      // name: "",
      email: "",
      password: ""
      // location: ""
    }); // default values to overcome this onchange listener
  

    let navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault(); // synthetic event example
      // console.log(JSON.stringify({email:credentials.email,password:credentials.password}))
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
  
        // backend mai data bhejenge
        body: JSON.stringify({
          // name: credentials.name,
          email: credentials.email,
          password: credentials.password
          // location: credentials.location,
        }) 
      });
  
      const json = await response.json(); // response ko json mai convert krenge
      console.log(json);
  
      if (!json.success) {
        // if (json.errors) {
          // const errorMessages = json.errors.map(err => err.msg).join('\n');
          // alert("Validation failed:\n" + errorMessages);
          alert("Enter valid credentials");
        // } else {
          // alert("Enter valid credentials");
        // }
      }

      if(json.success)
      {
        localStorage.setItem("authToken",json.authToken);
        // localStorage.setItem("userName", json.name);
        console.log(localStorage.getItem("authToken"));
        navigate("/");
      }
    };
  
    const onChange = (event) => {
      setcredentials({ ...credentials, [event.target.name]: event.target.value });
    };
  return (
    <div>
       <div className="container">
        <form onSubmit={handleSubmit}>
        
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

          <button type="submit" className="m-3 btn btn-success">
            Login
          </button>
          <Link to="/" className="btn btn-danger">
            New user
          </Link>
        </form>
      </div>

    </div>
  )
}
