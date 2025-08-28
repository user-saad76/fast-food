import React from "react";

function RestaurantManagement() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">🏪 Restaurant Management</h2>
      <p className="text-center mb-5">
        At <strong>FastBite</strong>, we ensure top-quality food, hygiene, and customer
        service through a professional management system.
      </p>

      <div className="row g-4">
        {/* Staff Management */}
        <div className="col-md-6 col-lg-3">
          <div className="card shadow h-100 text-center">
            <div className="card-body">
              <i className="bi bi-people display-4 text-danger"></i>
              <h5 className="card-title mt-3">Staff Management</h5>
              <p className="card-text">
                Our trained chefs and staff follow strict guidelines to maintain food
                quality and quick service.
              </p>
            </div>
          </div>
        </div>

        {/* Inventory & Supply */}
        <div className="col-md-6 col-lg-3">
          <div className="card shadow h-100 text-center">
            <div className="card-body">
              <i className="bi bi-box-seam display-4 text-warning"></i>
              <h5 className="card-title mt-3">Inventory & Supply</h5>
              <p className="card-text">
                Fresh ingredients are sourced daily, with automated tracking to avoid
                shortages.
              </p>
            </div>
          </div>
        </div>

        {/* Hygiene & Safety */}
        <div className="col-md-6 col-lg-3">
          <div className="card shadow h-100 text-center">
            <div className="card-body">
              <i className="bi bi-shield-check display-4 text-success"></i>
              <h5 className="card-title mt-3">Hygiene & Safety</h5>
              <p className="card-text">
                We follow international hygiene standards to provide safe and healthy meals.
              </p>
            </div>
          </div>
        </div>

        {/* Customer Service */}
        <div className="col-md-6 col-lg-3">
          <div className="card shadow h-100 text-center">
            <div className="card-body">
              <i className="bi bi-headset display-4 text-primary"></i>
              <h5 className="card-title mt-3">Customer Service</h5>
              <p className="card-text">
                Our team ensures quick responses, customer satisfaction, and a friendly
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RestaurantManagement;
