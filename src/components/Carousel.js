import React from "react";


// cards 
export default function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel" style={{objectFit:"contain !important"}}
      >
        {/* !important - overwrite the css property */}
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "5" }}>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success text-white bg-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active">
            <img
              src="https://cdn.pixabay.com/photo/2023/03/05/11/02/burger-7831128_640.jpg"
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://ocakes.in/hyderabad/storage/app/public/images/item/item-642f5b5885a38.jpg"
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="pastery"
            />
          </div>
          <div className="carousel-item">
            {/* brightness to dull the image */}
            <img
              src="https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D"
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="biryani"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
