import React from "react";

export default function Card() {
  return (
    <div>
      {/* key value pair pass krna padta hai while styling */}
      <div className="card mt-2" style={{ width: "18rem", maxHeight: "360px" }}>
        {/* closing tag is very imp in jsx */}
        <img src="https://www.pillsbury.in/wp-content/uploads/2021/09/Idli.jpg" className="card-img-top" alt="Idli" />
        <div className="card-body">
          <h5 className="card-title">Idli</h5>
          <p className="card-text">Description about the dish</p>

          <div className="container w-100">
            <select className="m-2 h-100 bg-success rounded">
              {
                // inside this we can write Js
                // number of quantities customer want (at max 6 can be ordered at a time)
                Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      
                      {i + 1}{" "}
                    </option>
                  );
                })
              }
            </select>

            <select className="m-2 h-100 bg-success rounded">
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>

            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
          {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
    </div>
  );
}
