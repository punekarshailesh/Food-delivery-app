import React from "react";

export default function Card(props) {

  let options = props.options;
  let priceOptions = Object.keys(options);


  return (
    <div>
      {/* key value pair pass krna padta hai while styling */}
      <div className="card mt-2" style={{ width: "18rem", maxHeight: "360px" }}>
        {/* closing tag is very imp in jsx */}
        <img src={props.imgSrc} className="card-img-top" alt="Idli" />
        <div className="card-body">
          <h5 className="card-title">
              {props.foodName}
          </h5>
          <p className="card-text">Food Description</p>

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
              {
                priceOptions.map((data)=>{

                  return <option key={data} value={data}>{data}</option>
                })}
              
            </select>

            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
          {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
    </div>
  );
}
