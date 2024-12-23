import React, { useState, useEffect } from "react";

const DiseasesCarousel = () => {
  const diseases = [
    { name: "Diabetes" },
    { name: "Heart Health" },
    { name: "Gastrointestinal" },
    { name: "Mental Health" },
    { name: "High Blood Pressure" },
    { name: "Cancer" },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chunkArray = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  const chunkSize = isMobile ? 1 : 3;
  const chunks = chunkArray(diseases, chunkSize);

  return (
    <>
      <div id="deaseCarousel" className="carousel slide mt-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          {chunks.map((chunk, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
              <div className="row justify-content-center">
                {chunk.map((item, idx) => (
                  <div className={`col-lg-3 col-md-4 col-sm-6 ${isMobile ? "col-6" : ""}`} key={idx}>
                    <div className="Circle">
                      <div className="subCircle">
                        <span className="PlusIcon">+</span>
                      </div>
                      <h5 className="disease-name">{item.name}</h5>
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
          data-bs-target="#deaseCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#deaseCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="row mt-5">
        <div className="col-12 text-center">
          <button className="btn btn-dark SeeAllMedicationsBtn">View All Conditions</button>
        </div>
      </div>
    </>
  );
};

export default DiseasesCarousel;
