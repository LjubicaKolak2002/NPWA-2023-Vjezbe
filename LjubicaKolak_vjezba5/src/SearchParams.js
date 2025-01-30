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
    const drinkTypes = await fetch("http://demo9854829.mockable.io/napitci");
    const json = await drinkTypes.json();
    const result = await json.vrstanapitka;
    setTypes(result);
  }

  async function getDrinks() {
    const drinks = await fetch(`https://demo9854829.mockable.io/napitci/${type}`);
    const json = await drinks.json();
    const result = Object.keys(json[type]);
    if (result) {
      setDrinks(result);
    }
  }

  async function getFilteredDrinks() {
    const drinks = await fetch(`http://demo9854829.mockable.io/napitci/${type}`);
    const json = await drinks.json();
    const result = json[type][selectedDrink];
    console.log(result);
    if (result) {
      setFilteredDrinks(result);
    }
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
                  <option value={item}>{item}</option>
                ))}
            </select>
        </label>

        <label>
          <br/><br/>Odaberite piće: 

          <select onChange={(e) => {
              setSelectedDrink(e.target.value);
            }}>
              <option>All</option>
              {drinks.map((drink, index) => (
                <option value={drink}>{drink}</option>
              ))}
          </select><br/><br/>

          Odabrana vrsta pića: {type}<br/>
          Odabrano piće: {selectedDrink}
        </label>
      </div>
      <Result data={filteredDrinks} type={type} selectedDrink={selectedDrink}/>
    </form>
    </>
  );
}


export default SearchParams;