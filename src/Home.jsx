import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const drugs = [
    { name: "Abiraterone Acetate", generic: "Generic for Zytiga", price: "$23.69", retailPrice: "$1,093.20" },
    { name: "Invokana (Canagliflozin)", price: "$245.92", retailPrice: "$723.50" },
    { name: "Mesalamine", generic: "Generic for Canasa", price: "$28.46", retailPrice: "$766.80" },
    { name: "Lisinopril", generic: "Generic for Prinivil", price: "$5.59", retailPrice: "$33.90" },
    { name: "Fluoxetine", generic: "Generic for Prozac", price: "$5.37", retailPrice: "$22.80" },
    { name: "Aspirin", generic: "Generic for Bayer", price: "$1.50", retailPrice: "$10.00" },
    { name: "Metformin", generic: "Generic for Glucophage", price: "$3.99", retailPrice: "$15.00" },
  ];

  // State to track the screen size
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Event listener for resizing the screen
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Function to chunk the data array
  const chunkArray = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  // Dynamically set chunk size: 2 items for mobile, 4 for larger screens
  const chunkSize = isMobile ? 1 : 4;
  const chunks = chunkArray(drugs, chunkSize);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 text-center">
          <h1 className="HomeMainText">
            No middlemen. No price games. Huge drug savings.
          </h1>
        </div>
      </div>

      <div
        id="drugCarousel"
        className="carousel slide mt-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {chunks.map((chunk, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <div className="row justify-content-center">
                {chunk.map((item, idx) => (
                  <div
                    className={`col-lg-3 col-md-4 col-sm-6 ${isMobile ? "col-6" : ""}`}
                    key={idx}
                  >
                    <div className="card m-2 p-3 text-center">
                      <h5>{item.name}</h5>
                      {item.generic && <p>({item.generic})</p>}
                      <h4 className="text-danger">{item.price}</h4>
                      <p>Retail Price: {item.retailPrice}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
  className="carousel-control-prev"
  type="button"
  data-bs-target="#drugCarousel"
  data-bs-slide="prev"
>
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>

</button>
<button
  className="carousel-control-next"
  type="button"
  data-bs-target="#drugCarousel"
  data-bs-slide="next"
>
  <span className="carousel-control-next-icon" aria-hidden="true"></span>

</button>

      </div>

        <div className="row mt-5">
                <div className="col-12 text-center">
                
                <button className="btn btn-dark SeeAllMedicationsBtn">See All Medications</button>
                </div>
            </div>

    </div>
  );
};

export default Home;
