import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* Brand & About */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">🍔 FastBite</h4>
            <p>
              Serving delicious burgers, pizzas, and fast food since 2010.  
              We believe in fresh ingredients, quick service, and happy customers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Menu</a></li>
              <li><a href="#" className="text-light text-decoration-none">Deals</a></li>
              <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p><i className="bi bi-geo-alt-fill me-2"></i> 123 Food Street, Lahore</p>
            <p><i className="bi bi-telephone-fill me-2"></i> +92 300 1234567</p>
            <p><i className="bi bi-envelope-fill me-2"></i> support@fastbite.com</p>
          </div>

          {/* Social Media */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-light fs-4"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light fs-4"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-light fs-4"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-light fs-4"><i className="bi bi-youtube"></i></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center border-top border-secondary pt-3 mt-3">
          <p className="mb-0">
            © {new Date().getFullYear()} <strong>FastBite</strong>. All rights reserved.  
            | Designed with ❤️ by FastBite Team
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
