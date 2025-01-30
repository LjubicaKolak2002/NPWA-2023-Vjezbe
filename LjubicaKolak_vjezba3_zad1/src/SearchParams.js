import React, { useState, useEffect } from "react";

const SearchParams = () => {
  const [type, setType] = useState("");
  const [types, setTypes] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [selectedDrink, setSelectedDrink] = useState("");

  async function getDrinkTypes() {
    const drinkTypes = await fetch("http://demo9854829.mockable.io/napitci");
    const json = await drinkTypes.json();
    const result = await json.vrstanapitka;
    setTypes(result);
  }

  async function getDrinks(drinkType) {
    const drinks = await fetch(`http://demo9854829.mockable.io/napitci/${drinkType}`);
    const json = await drinks.json();
    if (json[drinkType]) {
      setDrinks(json[drinkType]);
    }
  }

  useEffect(() => {
    getDrinkTypes();
  }, []);

  useEffect(() => {
    getDrinks(type);
  }, [type] ) 

  return (
      <>
      <form>
      <label>
      <select onChange={(e) => setType(e.target.value)}>
      <option>All</option>
        {types.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </label>

    <label>
    <br/><br/>
    <select onChange={(e) => setSelectedDrink(e.target.value)}>
    <option>All</option>
      {drinks.map((drink) => (
        <option value={drink}>{drink}</option>
      ))}
    </select>
    </label>
    


    </form>
    <p>Odabrana vrsta pića: {type}<br/>
     Odabrano piće: {selectedDrink}</p></>

  );
}


export default SearchParams;
