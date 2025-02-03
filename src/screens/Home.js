import React, { useEffect, useState } from "react"; // useReducer
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
// import Carousel from "../components/Carousel";
// import { useState } from 'react';

export default function Home() {

  const [search, setSearch] = useState("");
  const [foodCategory, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    // console.log(response[0],response[1])
    setFoodItem(response[0]); // response[0] == foodData

    setFoodCat(response[1]); // response[1] foodCategory
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{ objectFit: "contain !important" }}
        >
          {/* !important - overwrite the css property */}
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{ zIndex: "5" }}>
              <div className="d-flex justify-content-center">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"

                  value={search} onChange={(e)=>{setSearch(e.target.value)}}
                />
                {/* <button
                  className="btn btn-outline-success text-white bg-success"
                  type="submit"
                >
                  Search
                </button> */}
              </div>
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
        </div>{" "}
      </div>
      <div className="container">
        {foodCategory.length > 0
          ? foodCategory.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id} className="fs-3 m-3">
                    {data.CategoryName}
                  </div>

                  <hr />
                  {foodItem.length > 0 ? (
                    foodItem
                      .filter((item) => (item.CategoryName === data.CategoryName)&& (item.name.toLowerCase().includes(search.toLowerCase()))) 
                      .map((filterItems) => {
                        return (
                          <div
                            key={filterItems._id}
                            className="col-12 col-md-6 col-lg-3"
                          >
                            <Card
                              foodName={filterItems.name}
                              options={filterItems.options[0]}
                              imgSrc={filterItems.img}
                              foodDescription={filterItems.description}
                            ></Card>
                          </div>
                        );
                      })
                  ) : (
                    <div>No such Data Found</div>
                  )}
                </div>
              );
            })
          : ""}

        {/* <Card /> */}
      </div>

      <div>
        {" "}
        <Footer></Footer>{" "}
      </div>
    </div>
  );
}
