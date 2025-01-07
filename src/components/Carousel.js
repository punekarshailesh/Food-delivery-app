// import React from "react";

// export default function Carousel() {
//   return (
//     <div>
//       <div
//         id="carouselExampleFade"
//         className="carousel slide carousel-fade"
//         data-bs-ride="carousel" style={{objectFit:"contain !important"}}
//       >
//         {/* !important - overwrite the css property */}
//         <div className="carousel-inner" id="carousel">
//           <div className="carousel-caption" style={{ zIndex: "5" }}>
//             <form className="d-flex">
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//               <button
//                 className="btn btn-outline-success text-white bg-success"
//                 type="submit"
//               >
//                 Search
//               </button>
//             </form>
//           </div>
//           <div className="carousel-item active">
//             <img
//               src="https://cdn.pixabay.com/photo/2023/03/05/11/02/burger-7831128_640.jpg"
//               className="d-block w-100"
//               style={{ filter: "brightness(30%)" }}
//               alt="burger"
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               src="https://ocakes.in/hyderabad/storage/app/public/images/item/item-642f5b5885a38.jpg"
//               className="d-block w-100"
//               style={{ filter: "brightness(30%)" }}
//               alt="pastery"
//             />
//           </div>
//           <div className="carousel-item">
//             {/* brightness to dull the image */}
//             <img
//               src="https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D"
//               className="d-block w-100"
//               style={{ filter: "brightness(30%)" }}
//               alt="biryani"
//             />
//           </div>
//         </div>
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExampleFade"
//           data-bs-slide="prev"
//         >
//           <span
//             className="carousel-control-prev-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExampleFade"
//           data-bs-slide="next"
//         >
//           <span
//             className="carousel-control-next-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";

export default function Carousel() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Simulating Unsplash API images (replace with actual API calls in production)
    const placeholderImages = [
      "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_5:4/v1/img/recipes/13/93/66/A1iJHQROK3lAAzXFhb3Q_file2%255B1%255D.jpeg",
      "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_5:4/v1/img/recipes/13/93/66/A1iJHQROK3lAAzXFhb3Q_file2%255B1%255D.jpeg",
      "https://www.terrafood.co.in/cdn/shop/files/VegBiryani.jpg",
    ];
    setImages(placeholderImages);
  }, []);

  if (images.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ objectFit: "contain !important" }}
      >
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
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={image}
                className="d-block w-100"
                style={{ filter: "brightness(30%)" }}
                alt={`Random food ${index + 1}`}
              />
            </div>
          ))}
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


