import Navbar from "../components/Navbar";
import BannerCarousel from "../components/BannerCarousel";
import OrderDetails from "../components/OrderDetails";
import Deal from "../components/Deal";
import BranchesLocation from "../components/BranchesLocation";
import RestaurantManagement from "../components/RestaurantManagement"
import Footer from "../components/Footer"

function Home(){
    return(
        <>
      <BannerCarousel/>
      <OrderDetails/>
      <Deal/>
      <BranchesLocation/>
      <RestaurantManagement/>
       <Footer/>
        </>
    )
}
export default Home