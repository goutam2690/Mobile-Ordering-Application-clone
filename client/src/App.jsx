import { useEffect, useState } from "react"
import Cart from "./cart/Cart"
import Footer from "./components/footer/footer"
import Header from "./components/header/Header"
import MobileCard from "./components/mobileCard/MobileCard"


const App = () => {
  const [mobiles, setMobiles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchMobiles();
  }, []); // Fetch mobiles on component mount

  const fetchMobiles = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/mobiles');
      const data = await response.json();
      setMobiles(data);
    } catch (error) {
      console.error('Error fetching mobiles:', error);
    }
  };

  return (
    <div>
      <Header setMobiles={setMobiles} />
      <MobileCard mobiles={mobiles} setCart={setCart} />
      <Cart cart={cart} setCart={setCart} />
      <Footer />
    </div>
  )
}

export default App
