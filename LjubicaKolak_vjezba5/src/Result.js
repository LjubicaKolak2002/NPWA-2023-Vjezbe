import React from "react";
import { Link } from "react-router-dom";


const Result = ({data, type, selectedDrink}) => {
    return (
        <div className="filteredProductsDiv">
            <h3>Profiltrirani proizvodi</h3><br/>
            {data.map((item, index) => (
                    <div>
                    <strong>{item}</strong>
                    <Link to={`/napitci/${type}/${selectedDrink}/detalji/${index}`}>
                        <button>Details </button><br/><br/>
                    </Link>
                </div>
            ))}
        </div> 
    )
}

export default Result;