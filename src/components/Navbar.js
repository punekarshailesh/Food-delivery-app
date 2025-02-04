import React from "react";
import { Link,useNavigate } from "react-router-dom";

export default function Navbar(props) {

  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem("authToken");
    localStorage.removeItem("userName");
    navigate("/login")
    // window.location.replace("/login");
  }




  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">
            GoFood
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav me-auto mb-2 ">
              {/* <div className="navbar-nav"> */}
              <li>
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {/* {localStorage.getItem("authToken") ? (
                // <li>
                //   <div className="nav-link active fs-5">
                //     Welcome, {localStorage.getItem("userName")}
                //   </div>
                // </li>
              ) : ""} */}

              {localStorage.getItem("authToken") ? (
                <li className="nav-item">
                  <Link className="nav-link active fs-5" to="/myorder">
                    My Orders
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
            {!localStorage.getItem("authToken") ? 

            <div className="d-flex">
              <Link className="btn bg-white text-success mx-1" to="/login">
                Login
              </Link>

              <Link className="btn bg-white text-success mx-1" to="/createuser">
                Signup
              </Link>
            </div>
            :
            <div>
              {/* <div>{props.userName}</div> */}
            <div className="btn bg-white text-success mx-2">My Cart</div>
            

              <div className="btn bg-white text-danger mx-2" onClick={handleLogout}>Logout</div>
            </div>
            }
          </div>
        </div>
      </nav>
    </div>
  );
}
