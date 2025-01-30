import React from "react";
import { Link } from "react-router-dom";


const Result = ({data, type, selectedDrink}) => {
    return (
        <div className="filteredProductsDiv">
            <h3>Profiltrirani proizvodi</h3><br/>
            {data ? data.map((item, index) => (
                    <div>
                    <strong>{item.name}</strong>
                    <Link to={`/napitci/detalji/${item._id}`}>
                        <button>Details </button><br/><br/>
                    </Link>
                </div>
            )): <span></span>}
        </div> 
    )
}

export default Result;