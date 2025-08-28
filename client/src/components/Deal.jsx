 import FirstDeal from "../assets/mc donalds-burgers-1.jpg"
  import SecondDeal from "../assets/family pizza-1.jpg"
  import ThirdDeal from "../assets/fries-1.jpg"

function Deal(){
    return(
        
      <div className="container my-5">
  <h2 className="text-center mb-4">🔥 Special Deals</h2>
  <div className="row">

    {/* Deal 1 */}
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow border-0">
        <img
          src= {FirstDeal}
          className="card-img-top"
          alt="Cheesy Burger"
        />
        <div className="card-body text-center">
          <h5 className="card-title">Cheesy Burger</h5>
          <p className="card-text">Juicy grilled burger with melted cheese.</p>
          <h6 className="text-danger fw-bold">$5.99</h6>
          <button className="btn btn-primary mt-2">Add to Cart 🛒</button>
        </div>
      </div>
    </div>

    {/* Deal 2 */}
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow border-0">
        <img
          src={SecondDeal}
          className="card-img-top"
          alt="Family Pizza"
        />
        <div className="card-body text-center">
          <h5 className="card-title">Family Pizza</h5>
          <p className="card-text">Large pizza with 2 toppings of your choice.</p>
          <h6 className="text-danger fw-bold">$12.99</h6>
          <button className="btn btn-primary mt-2">Add to Cart 🛒</button>
        </div>
      </div>
    </div>

    {/* Deal 3 */}
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow border-0">
        <img
          src= {ThirdDeal}
          className="card-img-top"
          alt="Crispy Fries"
        />
        <div className="card-body text-center">
          <h5 className="card-title">Crispy Fries</h5>
          <p className="card-text">Golden and crispy french fries with dip.</p>
          <h6 className="text-danger fw-bold">$3.99</h6>
          <button className="btn btn-primary mt-2">Add to Cart 🛒</button>
        </div>
      </div>
    </div>

  </div>
</div>




    )
}
export default Deal;