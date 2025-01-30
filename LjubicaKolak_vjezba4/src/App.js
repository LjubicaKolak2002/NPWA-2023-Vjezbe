import React from "react";
import WrappedDetails from "./Details";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/napitci/:type/:selectedDrink/detalji/:id" element={<WrappedDetails />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));