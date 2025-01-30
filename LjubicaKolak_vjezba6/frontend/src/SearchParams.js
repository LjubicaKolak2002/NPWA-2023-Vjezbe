import React, { useState, useEffect } from "react";
import Result from "./Result.js";
import {Link} from "react-router-dom";

const SearchParams = () => {
  const [type, setType] = useState("");
  const [types, setTypes] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [selectedDrink, setSelectedDrink] = useState("");
  const [filteredDrinks, setFilteredDrinks] = useState([]);


  async function getDrinkTypes() {
    const drinkTypes = await fetch("http://localhost:3000/api/napitci");
    const json = await drinkTypes.json();
    const result = await json;
    console.log("SERVER DATA: ", result)
    setTypes(result);
  }

  async function getDrinks() {
    const drinks = await fetch(`http://localhost:3000/api/napitci/${type}`);
    const json = await drinks.json();
    const result = await json;
    console.log(result);
    setDrinks(result);
}


   async function getFilteredDrinks() {
    //console.log("Selected Drink ID:", selectedDrink);
    const drinks = await fetch(`http://localhost:3000/api/napitci/detalji/${selectedDrink}`);
    const json = await drinks.json();
    const result = await json;
    setFilteredDrinks(result);
    console.log("Result: ", result);
  }    
 
  useEffect(() => {
    getDrinkTypes();
  }, []);

  useEffect(() => {
    getDrinks();
  }, [type]);
  
 
  useEffect(() => {
    getFilteredDrinks();
  }, [selectedDrink])  
 

 return (
      <>
      <form>
        <div className="selectDiv">
        <Link to="/cart" className="cartLink">MyCart</Link>
        <h2>Drink Filter</h2>
          <label><br/>Odaberite vrstu pića: 
            <select onChange={(e) => setType(e.target.value)}>
              <option>All</option>
                {types.map((item) => (
                  <option value={item._id}>{item.name}</option>
                ))}
            </select>
        </label>

      {<label>
          <br/><br/>Odaberite piće: 
          <select onChange={(e) => setSelectedDrink(e.target.value)}>
              <option>All</option>
              {drinks.map((drink) => (
                  <option value={drink._id}>{drink.name}</option>
              ))}
          </select><br/><br/>

        </label>}
      </div>
      {filteredDrinks.length > 0 ? <Result data={filteredDrinks} type={type} selectedDrink={selectedDrink}/> : <span></span>}
    </form>
    </>
  );
}

export default SearchParams;