import React, { useEffect,  useState } from "react"; // useReducer
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
// import { useState } from 'react';

export default function Home() {
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
    setFoodItem(response[0]);
    setFoodCat(response[1]);
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
        <Carousel />
      </div>
      <div className="container">
        {foodCategory !== []
          ? foodCategory.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id} className="fs-3 m-3">
                    {data.CategoryName}
                  </div>

                  <hr />
                  {foodItem !== [] ? (
                    foodItem
                      .filter((item) => item.CategoryName === data.CategoryName)
                      .map((filterItems) => {
                        return (
                          <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                            <Card />
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
