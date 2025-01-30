import React, {useState} from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchParams from "./SearchParams";
import WrappedDetails from "./Details";
import Context from "./CartContext";
import Cart from "./Cart";


const App = () => {

  const [cart, setCart] = useState([])
  return (
    <div>
      <Context.Provider value={[cart, setCart]}>
        <Router>
          <Routes>
            <Route path="/napitci/detalji/:id" element={<WrappedDetails />} />
            <Route path="/" element={<SearchParams />} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </Router>
      </Context.Provider>
    </div>
  );
};

render(<App />, document.getElementById("root"));

export default App
