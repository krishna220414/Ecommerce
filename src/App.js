import './App.css';
import PreNavbar from './Components/PreNavbar';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import data from "./data/data.json"
import Offers from './Components/Offers';
import Heading from './Components/Heading';
import StarProduct from './Components/StarProduct';
import HotAccessoriesMenu from './Components/HotAccessoriesMenu';
import HotAccessories from './Components/HotAccessories';
import ProductReviews from './Components/ProductReviews';
import Videos from './Components/Videos';
import Banner from './Components/Banner';
import Footer from './Components/Footer';


function App() {


  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
        <Route path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
      </Routes>
      <Routes>
        <Route path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />
      </Routes>
      <Routes>
        <Route path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
      </Routes>
      <Routes>
        <Route path="/lifeStyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />} />
      </Routes>
      <Routes>
        <Route path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
      </Routes>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews}/>
      <Heading text="VIDEOS" />
      <Videos videos= {data.videos} />
      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner} />
      <Footer footer= {data.footer} />

    </Router>






  );
}

export default App;
