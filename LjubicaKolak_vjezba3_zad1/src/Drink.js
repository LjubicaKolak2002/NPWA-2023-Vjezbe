import React from "react";
import {Link} from "react-router-dom";

const Drink = () => {
    return (
        <div>
            <Link to={`${props.type}${props.vrsta}/detalji`}></Link>
        </div>
    )
}

export default Drink;