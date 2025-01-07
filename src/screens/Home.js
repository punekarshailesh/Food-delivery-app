import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        {/* key value pair pass krna padta hai while styling */}
        <div className="card mt-3" style={{ "width": "18rem","maxHeight":"360px"}}>
          {/* closing tag is very imp in jsx */}
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Description about the dish
            </p>

            <div className="container w-100">
             <select className="m-2 h-100 w-100 bg-success rounded">
              {
                // inside this we can write Js
                // number of quantities customer want (at max 6 can be ordered at a time)
                Array.from(Array(6),(e, i)=>{
                  return(
                    <option key={i+1} value={i+1}> {i+1} </option>
                  )
                })
              }
             </select>

             <select className="m-2 h-100 w-100 bg-success rounded">
                <option value="half">Half</option>
                <option value="full">Full</option>
             </select>

            </div>
            {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
