import React from "react";

function OrderDetails() {
  return (
    <div className="container my-5">
      <div className="row text-center">
        
        {/* Online Orders */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow border-0">
            <div className="card-body">
              <h3 className="text-danger">🛒 Online Orders</h3>
              <p>
                Place your order online in just a few clicks. Simple, fast, and
                secure ordering experience!
              </p>
            </div>
          </div>
        </div>

        {/* Free Delivery */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow border-0">
            <div className="card-body">
              <h3 className="text-success">🚚 Free Delivery</h3>
              <p>
                Enjoy <strong>free delivery</strong> on all orders above $20.  
                Get your meals delivered hot & fresh to your doorstep.
              </p>
            </div>
          </div>
        </div>

        {/* Fresh Food Details */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow border-0">
            <div className="card-body">
              <h3 className="text-primary">🍴 Fresh & Tasty</h3>
              <p>
                Our food is prepared daily with <strong>fresh ingredients</strong>, 
                ensuring great taste and quality in every bite.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default OrderDetails;
