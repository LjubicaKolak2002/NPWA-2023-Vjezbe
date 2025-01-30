import React, { useState, useEffect } from "react";
import useDropdown from "./UseDropdown";

const SearchParams = () => {
  const [types, setTypes] = useState([]);
  const [drinks, setDrinks] = useState([]);
  
  const [type, TypeDropdown] = useDropdown("Odaberite vrstu pića: ", " ", types);
  const [selectedDrink, DrinkDropdown, setSelectedDrink] = useDropdown("Odaberite piće: ","",drinks);

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
  }, [type]);
  return (
    <>
      <TypeDropdown />
      <br />
      <br />
      <DrinkDropdown />
      <p>
        Odabrana vrsta pića: {type}
        <br />
        Odabrano piće: {selectedDrink}
      </p>
    </>
  );
};

export default SearchParams;
