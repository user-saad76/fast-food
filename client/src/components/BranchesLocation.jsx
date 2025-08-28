import React from "react";

function BranchesCarousel() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">📍 Our Branches</h2>

      <div id="branchesCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          {/* Branch 1 */}
          <div className="carousel-item active">
            <div className="card shadow rounded-3 mx-auto" style={{ maxWidth: "600px" }}>
              <div className="card-body text-center">
                <h5 className="card-title">Main Branch - City Center</h5>
                <p className="card-text">
                  🍔 FastBite Central <br />
                  123 Main Street, Downtown <br />
                  Phone: +92 300 1234567
                </p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0!2d67.0011!3d24.8607"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Main Branch Map"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Branch 2 */}
          <div className="carousel-item">
            <div className="card shadow rounded-3 mx-auto" style={{ maxWidth: "600px" }}>
              <div className="card-body text-center">
                <h5 className="card-title">Branch - North Area</h5>
                <p className="card-text">
                  🍕 FastBite North <br />
                  45 North Avenue, Gulshan <br />
                  Phone: +92 301 7654321
                </p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0!2d67.02!3d24.87"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="North Branch Map"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Branch 3 */}
          <div className="carousel-item">
            <div className="card shadow rounded-3 mx-auto" style={{ maxWidth: "600px" }}>
              <div className="card-body text-center">
                <h5 className="card-title">Branch - East Side</h5>
                <p className="card-text">
                  🌮 FastBite East <br />
                  78 East Boulevard, Clifton <br />
                  Phone: +92 302 4567890
                </p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0!2d67.03!3d24.85"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="East Branch Map"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Branch 4 */}
          <div className="carousel-item">
            <div className="card shadow rounded-3 mx-auto" style={{ maxWidth: "600px" }}>
              <div className="card-body text-center">
                <h5 className="card-title">Branch - West End</h5>
                <p className="card-text">
                  🍟 FastBite West <br />
                  56 West Market, Saddar <br />
                  Phone: +92 303 9876543
                </p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0!2d67.04!3d24.84"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="West Branch Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#branchesCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#branchesCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default BranchesCarousel;
